// services/authService.ts
// Service d'authentification avec logging amélioré
import apiClient from '@/lib/api';
import { tokenStorage } from '@/utils/tokenStorage';

export interface RegisterData {
    name?: string;
    fname?: string;
    lname?: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string | null;
        email: string;
    };
}

export interface ForgotPasswordData {
    email: string;
}

export interface VerifyResetCodeData {
    email: string;
    code: string;
}

export interface ResetPasswordData {
    email: string;
    code: string;
    newPassword: string;
}

const authService = {
    // Inscription d'un nouvel utilisateur
    register: async (data: RegisterData): Promise<AuthResponse> => {
        try {
            console.log('📡 [AUTH SERVICE] Sending registration request...');
            console.log('📧 [AUTH SERVICE] Email:', data.email);

            const response = await apiClient.post('/register', data);

            console.log('✅ [AUTH SERVICE] Registration successful');
            console.log('👤 [AUTH SERVICE] User:', response.data.user);
            console.log('🔑 [AUTH SERVICE] Token received:', response.data.token ? 'YES' : 'NO');

            // Sauvegarder le token si l'inscription réussit
            if (response.data.token) {
                tokenStorage.saveToken(response.data.token);

                // Vérification
                const savedToken = tokenStorage.getToken();
                if (savedToken !== response.data.token) {
                    console.error('⚠️ [AUTH SERVICE] Token was not saved correctly after registration!');
                }
            } else {
                console.error('❌ [AUTH SERVICE] No token in registration response!');
            }

            return response.data;
        } catch (error) {
            console.error('❌ [AUTH SERVICE] Registration error:', error);
            throw error;
        }
    },

    // Connexion d'un utilisateur
    login: async (data: LoginData): Promise<AuthResponse> => {
        try {
            console.log('📡 [AUTH SERVICE] Sending login request...');
            console.log('📧 [AUTH SERVICE] Email:', data.email);

            const response = await apiClient.post('/login', data);

            console.log('✅ [AUTH SERVICE] Login successful');
            console.log('👤 [AUTH SERVICE] User:', response.data.user);
            console.log('🔑 [AUTH SERVICE] Token received:', response.data.token ? 'YES' : 'NO');

            // Sauvegarder le token
            if (response.data.token) {
                tokenStorage.saveToken(response.data.token);

                // Double vérification
                const savedToken = tokenStorage.getToken();
                if (savedToken !== response.data.token) {
                    console.error('⚠️ [AUTH SERVICE] Token was not saved correctly after login!');
                } else {
                    console.log('✅ [AUTH SERVICE] Token verified in storage after login');
                }
            } else {
                console.error('❌ [AUTH SERVICE] No token in login response!');
            }

            return response.data;
        } catch (error) {
            console.error('❌ [AUTH SERVICE] Login error:', error);
            throw error;
        }
    },

    // Déconnexion
    logout: (): void => {
        console.log('👋 [AUTH SERVICE] Logging out...');
        tokenStorage.removeToken();
        console.log('✅ [AUTH SERVICE] Logout complete');
    },

    // Demander un code de réinitialisation de mot de passe
    forgotPassword: async (data: ForgotPasswordData): Promise<{ message: string }> => {
        try {
            console.log('📡 [AUTH SERVICE] Sending forgot password request...');
            const response = await apiClient.post('/users/forgot-password', data);
            console.log('✅ [AUTH SERVICE] Forgot password request successful');
            return response.data;
        } catch (error) {
            console.error('❌ [AUTH SERVICE] Forgot password error:', error);
            throw error;
        }
    },

    // Vérifier le code de réinitialisation
    verifyResetCode: async (data: VerifyResetCodeData): Promise<{ message: string }> => {
        try {
            console.log('📡 [AUTH SERVICE] Verifying reset code...');
            const response = await apiClient.post('/verify-reset-code', data);
            console.log('✅ [AUTH SERVICE] Reset code verified');
            return response.data;
        } catch (error) {
            console.error('❌ [AUTH SERVICE] Verify reset code error:', error);
            throw error;
        }
    },

    // Réinitialiser le mot de passe
    resetPassword: async (data: ResetPasswordData): Promise<{ message: string }> => {
        try {
            console.log('📡 [AUTH SERVICE] Resetting password...');
            const response = await apiClient.post('/reset-password', data);
            console.log('✅ [AUTH SERVICE] Password reset successful');
            return response.data;
        } catch (error) {
            console.error('❌ [AUTH SERVICE] Reset password error:', error);
            throw error;
        }
    },

    // Vérifier si le token est valide
    verifyToken: async (): Promise<AuthResponse> => {
        const token = tokenStorage.getToken();

        if (!token) {
            console.log('⚠️ [AUTH SERVICE] No token to verify');
            throw new Error('No token found');
        }

        try {
            console.log('📡 [AUTH SERVICE] Verifying token...');
            console.log('🔑 [AUTH SERVICE] Using token:', token.substring(0, 30) + '...');

            const response = await apiClient.get('/users/verify-token');

            console.log('✅ [AUTH SERVICE] Token verified successfully');
            console.log('👤 [AUTH SERVICE] User data:', response.data.user);

            return {
                user: response.data.user,
                token: token
            };
        } catch (error) {
            console.error('❌ [AUTH SERVICE] Token verification failed:', error);
            console.log('🗑️ [AUTH SERVICE] Removing invalid token...');
            tokenStorage.removeToken();
            throw error;
        }
    },

    // Vérifier si l'utilisateur est connecté
    isAuthenticated: (): boolean => {
        const authenticated = tokenStorage.hasToken();
        console.log('🔐 [AUTH SERVICE] Is authenticated:', authenticated ? 'YES ✅' : 'NO ❌');
        return authenticated;
    }
};

export default authService;