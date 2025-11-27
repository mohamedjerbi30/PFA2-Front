// context/AuthContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import authService, { AuthResponse, LoginData, RegisterData } from '@/services/authService';
import { tokenStorage } from '@/utils/tokenStorage';

interface User {
    id: string;
    name: string | null;
    email: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => void;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Vérifier si l'utilisateur est connecté au chargement
    useEffect(() => {
        const initAuth = async () => {
            console.log('🔄 [AUTH CONTEXT] ===== PAGE REFRESH/LOAD =====');
            console.log('🔐 [AUTH CONTEXT] Starting authentication check...');

            // Vérifier localStorage directement
            if (typeof window !== 'undefined') {
                console.log('📦 [AUTH CONTEXT] localStorage content:', {
                    keys: Object.keys(localStorage),
                    length: localStorage.length
                });
            }

            const token = tokenStorage.getToken();

            console.log('🔍 [AUTH CONTEXT] Token in localStorage:', token ? 'EXISTS ✅' : 'MISSING ❌');
            if (token) {
                console.log('🔍 [AUTH CONTEXT] Token preview:', token.substring(0, 30) + '...');
                console.log('🔍 [AUTH CONTEXT] Token length:', token.length);
            }

            if (token) {
                try {
                    console.log('📡 [AUTH CONTEXT] Verifying token with backend...');
                    const response = await authService.verifyToken();
                    console.log('✅ [AUTH CONTEXT] Token verified successfully');
                    console.log('👤 [AUTH CONTEXT] User data:', response.user);
                    setUser(response.user);
                    console.log('✅ [AUTH CONTEXT] User state updated');
                } catch (error) {
                    console.error('❌ [AUTH CONTEXT] Token verification failed:', error);
                    console.log('🗑️ [AUTH CONTEXT] Removing invalid token...');
                    tokenStorage.removeToken();
                    setUser(null);
                }
            } else {
                console.log('ℹ️ [AUTH CONTEXT] No token found, user not authenticated');
                setUser(null);
            }

            setIsLoading(false);
            console.log('🏁 [AUTH CONTEXT] Authentication check complete');
            console.log('📊 [AUTH CONTEXT] Final state:', {
                isAuthenticated: !!user,
                hasUser: !!user,
                isLoading: false
            });
        };

        initAuth();
    }, []); // Ne se déclenche qu'au montage du composant

    // Fonction de connexion
    const login = async (data: LoginData) => {
        try {
            console.log('🔐 [AUTH CONTEXT] Attempting login for:', data.email);
            const response: AuthResponse = await authService.login(data);

            console.log('✅ [AUTH CONTEXT] Login successful');
            console.log('👤 [AUTH CONTEXT] User data:', response.user);

            // Vérifier que le token a bien été sauvegardé
            const savedToken = tokenStorage.getToken();
            console.log('🔑 [AUTH CONTEXT] Token in storage after login:', savedToken ? 'YES ✅' : 'NO ❌');

            setUser(response.user);
            console.log('✅ [AUTH CONTEXT] User state updated after login');
        } catch (error) {
            console.error('❌ [AUTH CONTEXT] Login failed:', error);
            throw error;
        }
    };

    // Fonction d'inscription
    const register = async (data: RegisterData) => {
        try {
            console.log('📝 [AUTH CONTEXT] Attempting registration for:', data.email);
            const response: AuthResponse = await authService.register(data);
            console.log('✅ [AUTH CONTEXT] Registration successful');
            setUser(response.user);
        } catch (error) {
            console.error('❌ [AUTH CONTEXT] Registration failed:', error);
            throw error;
        }
    };

    // Fonction de déconnexion
    const logout = () => {
        console.log('👋 [AUTH CONTEXT] Logging out...');
        authService.logout();
        setUser(null);
        console.log('✅ [AUTH CONTEXT] Logout complete');
    };

    // Rafraîchir les données utilisateur
    const refreshUser = async () => {
        try {
            console.log('🔄 [AUTH CONTEXT] Refreshing user data...');
            const response = await authService.verifyToken();
            setUser(response.user);
            console.log('✅ [AUTH CONTEXT] User data refreshed');
        } catch (error) {
            console.error('❌ [AUTH CONTEXT] Failed to refresh user:', error);
            logout();
        }
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        refreshUser
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personnalisé pour utiliser le contexte d'authentification
export function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}