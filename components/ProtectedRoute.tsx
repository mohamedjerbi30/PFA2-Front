// Composant pour protéger les routes nécessitant une authentification
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/connexion');
        }
    }, [isAuthenticated, isLoading, router]);

    // Afficher un spinner pendant la vérification
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    // Si non authentifié, ne rien afficher (redirection en cours)
    if (!isAuthenticated) {
        return null;
    }

    // Si authentifié, afficher le contenu
    return <>{children}</>;
}
