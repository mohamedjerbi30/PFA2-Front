// Page Profil Utilisateur
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Input, Button } from '@/components/UI';
import { useAuth } from '@/context/AuthContext';
import userService, { UserProfile } from '@/services/userService';
import ErrorMessage from '@/components/ErrorMessage';
import LoadingSpinner from '@/components/LoadingSpinner';
import ProtectedRoute from '@/components/ProtectedRoute';
import { tokenStorage } from '@/utils/tokenStorage';

function ProfilePageContent() {
    const { user, logout, refreshUser } = useAuth();
    const router = useRouter();

    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // États pour l'édition du profil
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ name: '', email: '' });

    // États pour le changement de mot de passe
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Charger le profil au montage
    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            console.log('👤 [PROFILE] Loading user profile...');
            console.log('🔍 [PROFILE] Auth state:', {
                isAuthenticated: !!user,
                userId: user?.id,
                userEmail: user?.email
            });
            console.log('🔍 [PROFILE] Token in storage:', tokenStorage.getToken() ? 'EXISTS' : 'MISSING');

            setIsLoading(true);
            const response = await userService.getProfile();

            console.log('✅ [PROFILE] Profile loaded successfully');
            console.log('📄 [PROFILE] Profile data:', response.data);

            setProfile(response.data);
            setEditData({ name: response.data.name, email: response.data.email });
        } catch (err: any) {
            console.error('❌ [PROFILE] Failed to load profile:', err);
            console.error('❌ [PROFILE] Error message:', err.message);
            setError(err.message || 'Erreur lors du chargement du profil');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            await userService.updateProfile(editData);
            setSuccess('Profil mis à jour avec succès');
            setIsEditing(false);
            await loadProfile();
            await refreshUser();
        } catch (err: any) {
            setError(err.message || 'Erreur lors de la mise à jour');
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError('Les nouveaux mots de passe ne correspondent pas');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            setError('Le nouveau mot de passe doit contenir au moins 6 caractères');
            return;
        }

        try {
            await userService.changePassword({
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword
            });
            setSuccess('Mot de passe modifié avec succès');
            setShowPasswordForm(false);
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        } catch (err: any) {
            setError(err.message || 'Erreur lors du changement de mot de passe');
        }
    };

    const handleDeleteAccount = async () => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
            return;
        }

        try {
            await userService.deleteAccount();
            logout();
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Erreur lors de la suppression du compte');
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="p-8">
                    <p className="text-red-600">Impossible de charger le profil</p>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Mon Profil</h1>

            {error && <ErrorMessage message={error} onClose={() => setError('')} />}
            {success && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                    {success}
                </div>
            )}

            {/* Informations du profil */}
            <Card className="p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Informations Personnelles</h2>
                    {!isEditing && (
                        <Button onClick={() => setIsEditing(true)} variant="outline">
                            Modifier
                        </Button>
                    )}
                </div>

                {isEditing ? (
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <Input
                            label="Nom complet"
                            value={editData.name}
                            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                            required
                        />
                        <Input
                            label="Email"
                            type="email"
                            value={editData.email}
                            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                            required
                        />
                        <div className="flex gap-4">
                            <Button type="submit">Sauvegarder</Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setIsEditing(false);
                                    setEditData({ name: profile.name, email: profile.email });
                                }}
                            >
                                Annuler
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Nom complet</label>
                            <p className="text-lg text-gray-900">{profile.name}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Email</label>
                            <p className="text-lg text-gray-900">{profile.email}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Membre depuis</label>
                            <p className="text-lg text-gray-900">
                                {new Date(profile.createdAt).toLocaleDateString('fr-FR')}
                            </p>
                        </div>
                    </div>
                )}
            </Card>

            {/* Changement de mot de passe */}
            <Card className="p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Sécurité</h2>
                    {!showPasswordForm && (
                        <Button onClick={() => setShowPasswordForm(true)} variant="outline">
                            Changer le mot de passe
                        </Button>
                    )}
                </div>

                {showPasswordForm && (
                    <form onSubmit={handleChangePassword} className="space-y-4">
                        <Input
                            label="Mot de passe actuel"
                            type="password"
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                            required
                        />
                        <Input
                            label="Nouveau mot de passe"
                            type="password"
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            required
                        />
                        <Input
                            label="Confirmer le nouveau mot de passe"
                            type="password"
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                            required
                        />
                        <div className="flex gap-4">
                            <Button type="submit">Changer le mot de passe</Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setShowPasswordForm(false);
                                    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                                }}
                            >
                                Annuler
                            </Button>
                        </div>
                    </form>
                )}
            </Card>

            {/* Zone dangereuse */}
            <Card className="p-6 border-red-200">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Zone Dangereuse</h2>
                <p className="text-gray-600 mb-4">
                    La suppression de votre compte est irréversible. Toutes vos données seront définitivement supprimées.
                </p>
                <Button variant="danger" onClick={handleDeleteAccount}>
                    Supprimer mon compte
                </Button>
            </Card>
        </div>
    );
}

export default function ProfilePage() {
    return (
        <ProtectedRoute>
            <ProfilePageContent />
        </ProtectedRoute>
    );
}
