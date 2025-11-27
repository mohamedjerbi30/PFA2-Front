// Service utilisateur - Gestion du profil utilisateur
import apiClient from '@/lib/api';

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface UpdateProfileData {
    name: string;
    email: string;
}

export interface ChangePasswordData {
    currentPassword: string;
    newPassword: string;
}

const userService = {
    // Récupérer le profil de l'utilisateur connecté
    getProfile: async (): Promise<{ success: boolean; data: UserProfile }> => {
        const response = await apiClient.get('/users/profile');
        return response.data;
    },

    // Mettre à jour le profil (nom et email)
    updateProfile: async (data: UpdateProfileData): Promise<{ success: boolean; message: string; data: UserProfile }> => {
        const response = await apiClient.put('/users/profile/update', data);
        return response.data;
    },

    // Changer le mot de passe
    changePassword: async (data: ChangePasswordData): Promise<{ success: boolean; message: string }> => {
        const response = await apiClient.put('/users/profile/change-password', data);
        return response.data;
    },

    // Supprimer le compte
    deleteAccount: async (): Promise<{ success: boolean; message: string }> => {
        const response = await apiClient.delete('/users/profile/delete');
        return response.data;
    }
};

export default userService;