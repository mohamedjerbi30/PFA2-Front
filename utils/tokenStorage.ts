// Utilitaires pour la gestion du token JWT dans localStorage

export const tokenStorage = {
    // Sauvegarder le token
    saveToken: (token: string): void => {
        if (typeof window !== 'undefined') {
            try {
                console.log('💾 [TOKEN STORAGE] Saving token to localStorage...');
                console.log('🔑 [TOKEN STORAGE] Token preview:', token.substring(0, 30) + '...');
                localStorage.setItem('auth_token', token);

                // Vérification immédiate
                const saved = localStorage.getItem('auth_token');
                if (saved === token) {
                    console.log('✅ [TOKEN STORAGE] Token saved successfully');
                } else {
                    console.error('❌ [TOKEN STORAGE] Token save verification FAILED');
                }
            } catch (error) {
                console.error('❌ [TOKEN STORAGE] Error saving token:', error);
            }
        } else {
            console.warn('⚠️ [TOKEN STORAGE] Window is undefined, cannot save token');
        }
    },

    // Récupérer le token
    getToken: (): string | null => {
        if (typeof window !== 'undefined') {
            try {
                const token = localStorage.getItem('auth_token');
                if (token) {
                    console.log('✅ [TOKEN STORAGE] Token retrieved from localStorage');
                    console.log('🔑 [TOKEN STORAGE] Token preview:', token.substring(0, 30) + '...');
                } else {
                    console.log('⚠️ [TOKEN STORAGE] No token found in localStorage');
                }
                return token;
            } catch (error) {
                console.error('❌ [TOKEN STORAGE] Error retrieving token:', error);
                return null;
            }
        }
        console.warn('⚠️ [TOKEN STORAGE] Window is undefined, cannot get token');
        return null;
    },

    // Supprimer le token
    removeToken: (): void => {
        if (typeof window !== 'undefined') {
            try {
                console.log('🗑️ [TOKEN STORAGE] Removing token from localStorage...');
                localStorage.removeItem('auth_token');
                console.log('✅ [TOKEN STORAGE] Token removed successfully');
            } catch (error) {
                console.error('❌ [TOKEN STORAGE] Error removing token:', error);
            }
        } else {
            console.warn('⚠️ [TOKEN STORAGE] Window is undefined, cannot remove token');
        }
    },

    // Vérifier si un token existe
    hasToken: (): boolean => {
        const token = tokenStorage.getToken();
        const exists = token !== null;
        console.log('🔍 [TOKEN STORAGE] Has token:', exists ? 'YES ✅' : 'NO ❌');
        return exists;
    }
};