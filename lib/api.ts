// Configuration du client API Axios
import axios from 'axios';
import { tokenStorage } from '@/utils/tokenStorage';

// URL de base de l'API backend
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Créer une instance Axios
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

// Intercepteur de requête - Ajouter le token JWT automatiquement
apiClient.interceptors.request.use(
    (config) => {
        const token = tokenStorage.getToken();

        // DEBUG LOGGING
        console.log('🔍 [API REQUEST]', {
            url: `${config.baseURL}${config.url}`,
            method: config.method?.toUpperCase(),
            hasToken: !!token,
            tokenPreview: token ? token.substring(0, 20) + '...' : 'NO TOKEN'
        });

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log('✅ Authorization header set');
        } else {
            console.warn('⚠️ No token found in localStorage');
        }

        return config;
    },
    (error) => {
        console.error('❌ Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// Intercepteur de réponse - Gérer les erreurs globalement
apiClient.interceptors.response.use(
    (response) => {
        console.log('✅ [API RESPONSE]', {
            url: response.config.url,
            status: response.status,
            statusText: response.statusText
        });
        return response;
    },
    (error) => {
        console.error('❌ [API ERROR]', {
            url: error.config?.url,
            status: error.response?.status,
            statusText: error.response?.statusText,
            message: error.response?.data?.message || error.message,
            data: error.response?.data
        });

        // Si le token est expiré ou invalide (401), supprimer le token
        if (error.response?.status === 401) {
            console.warn('🔒 401 Unauthorized - Removing token and redirecting to login');
            tokenStorage.removeToken();
            // Rediriger vers la page de connexion si on n'y est pas déjà
            if (typeof window !== 'undefined' && !window.location.pathname.includes('/connexion')) {
                window.location.href = '/connexion';
            }
        }

        // Retourner une erreur formatée
        const errorMessage = error.response?.data?.message || error.message || 'Une erreur est survenue';
        return Promise.reject(new Error(errorMessage));
    }
);

export default apiClient;