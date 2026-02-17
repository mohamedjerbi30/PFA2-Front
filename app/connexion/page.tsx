// Page Connexion / Authentification avec intégration API
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Input, Button } from '@/components/UI';
import { useAuth } from '@/context/AuthContext';
import ErrorMessage from '@/components/ErrorMessage';
import LoadingSpinner from '@/components/LoadingSpinner';
import authService from '@/services/authService';
import PublicRoute from '@/components/PublicRoute';
export default function ConnexionPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetStep, setResetStep] = useState<'email' | 'code' | 'password'>('email');
    const [resetEmail, setResetEmail] = useState('');
    const [resetCode, setResetCode] = useState('');

    const { login, register, isAuthenticated, isLoading: authLoading } = useAuth();
    const router = useRouter();

    // Rediriger si déjà connecté
    useEffect(() => {
        if (!authLoading && isAuthenticated) {
            router.push('/dashboard');
        }
    }, [isAuthenticated, authLoading, router]);

    // États du formulaire
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Afficher un chargement pendant la vérification de l'auth
    if (authLoading || isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Effacer l'erreur lors de la saisie
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (isLogin) {
                // Connexion
                await login({
                    email: formData.email,
                    password: formData.password
                });
                router.push('/dashboard');
            } else {
                // Inscription
                if (formData.password !== formData.confirmPassword) {
                    setError('Les mots de passe ne correspondent pas');
                    setIsLoading(false);
                    return;
                }

                if (formData.password.length < 6) {
                    setError('Le mot de passe doit contenir au moins 6 caractères');
                    setIsLoading(false);
                    return;
                }

                await register({
                    fname: formData.fname,
                    lname: formData.lname,
                    email: formData.email,
                    password: formData.password
                });
                router.push('/dashboard');
            }
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue');
        } finally {
            setIsLoading(false);
        }
    };

    // Gestion du mot de passe oublié
    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (resetStep === 'email') {
                await authService.forgotPassword({ email: resetEmail });
                setResetStep('code');
            } else if (resetStep === 'code') {
                await authService.verifyResetCode({ email: resetEmail, code: resetCode });
                setResetStep('password');
            } else if (resetStep === 'password') {
                await authService.resetPassword({
                    email: resetEmail,
                    code: resetCode,
                    newPassword: formData.password
                });
                setShowForgotPassword(false);
                setResetStep('email');
                setError('');
                alert('Mot de passe réinitialisé avec succès ! Vous pouvez maintenant vous connecter.');
            }
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue');
        } finally {
            setIsLoading(false);
        }
    };

    if (showForgotPassword) {
        return (
            <PublicRoute>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1988A7]/10 to-[#1988A7]/20 py-12 px-4 sm:px-6 lg:px-8">
                    <Card className="max-w-md w-full p-8">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-[#1988A7] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-white font-bold text-2xl">TR</span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Mot de passe oublié
                            </h1>
                            <p className="text-gray-600">
                                {resetStep === 'email' && 'Entrez votre email pour recevoir un code'}
                                {resetStep === 'code' && 'Entrez le code reçu par email'}
                                {resetStep === 'password' && 'Définissez votre nouveau mot de passe'}
                            </p>
                        </div>

                        {error && <ErrorMessage message={error} onClose={() => setError('')} />}

                        <form onSubmit={handleForgotPassword} className="space-y-4 mt-6">
                            {resetStep === 'email' && (
                                <Input
                                    label="Adresse email"
                                    type="email"
                                    value={resetEmail}
                                    onChange={(e) => setResetEmail(e.target.value)}
                                    placeholder="votre.email@exemple.fr"
                                    required
                                />
                            )}

                            {resetStep === 'code' && (
                                <Input
                                    label="Code de vérification"
                                    type="text"
                                    value={resetCode}
                                    onChange={(e) => setResetCode(e.target.value)}
                                    placeholder="123456"
                                    required
                                />
                            )}

                            {resetStep === 'password' && (
                                <>
                                    <Input
                                        label="Nouveau mot de passe"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        required
                                    />
                                    <Input
                                        label="Confirmer le mot de passe"
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        required
                                    />
                                </>
                            )}

                            <div className="flex gap-4">
                                <Button type="submit" className="flex-1" disabled={isLoading}>
                                    {isLoading ? <LoadingSpinner size="sm" /> :
                                        resetStep === 'email' ? 'Envoyer le code' :
                                            resetStep === 'code' ? 'Vérifier' : 'Réinitialiser'
                                    }
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setShowForgotPassword(false);
                                        setResetStep('email');
                                        setError('');
                                    }}
                                >
                                    Annuler
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </PublicRoute>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1988A7]/10 to-[#1988A7]/20 py-12 px-4 sm:px-6 lg:px-8">
            <Card className="max-w-md w-full p-8">
                {/* Logo et titre */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#1988A7] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold text-2xl">TR</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {isLogin ? 'Connexion' : 'Créer un compte'}
                    </h1>
                    <p className="text-gray-600">
                        {isLogin
                            ? 'Connectez-vous à votre espace TWEE RECRU'
                            : 'Rejoignez la plateforme TWEE RECRU'
                        }
                    </p>
                </div>

                {error && <ErrorMessage message={error} onClose={() => setError('')} />}

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    {!isLogin && (
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="Prénom"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                                placeholder="Votre prénom"
                                required
                            />
                            <Input
                                label="Nom"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                    )}

                    <Input
                        label="Adresse email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.fr"
                        required
                    />

                    <Input
                        label="Mot de passe"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                    />

                    {!isLogin && (
                        <Input
                            label="Confirmer le mot de passe"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    )}

                    {isLogin && (
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 rounded border-gray-300 text-[#1988A7] focus:ring-[#1988A7]"
                                />
                                <span className="text-gray-700">Se souvenir de moi</span>
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowForgotPassword(true)}
                                className="text-[#1988A7] hover:text-[#146d8a] font-medium transition-all"
                            >
                                Mot de passe oublié ?
                            </button>
                        </div>
                    )}

                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                        {isLoading ? (
                            <LoadingSpinner size="sm" />
                        ) : (
                            isLogin ? 'Se connecter' : 'Créer mon compte'
                        )}
                    </Button>
                </form>

                {/* Lien pour basculer entre connexion et inscription */}
                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-600">
                        {isLogin ? "Vous n'avez pas de compte ?" : 'Vous avez déjà un compte ?'}
                    </span>
                    {' '}
                    <button
                        type="button"
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                        }}
                        className="text-[#1988A7] hover:text-[#146d8a] font-semibold transition-all"
                    >
                        {isLogin ? "S'inscrire" : 'Se connecter'}
                    </button>
                </div>
            </Card>
        </div>
    );
}
