import axios from 'axios';
import { API_ROUTES } from '../constants';

const baseURL = 'http://localhost:4000/api';

const axiosInstance = axios.create({
    baseURL: API_ROUTES.API_URL,
    timeout: 5000, // Temps d'attente pour chaque requête
  });


export function getFromLocalStorage(item) {
return localStorage.getItem(item);
}
  
  

export async function getAuthenticatedUser() {
const defaultReturnObject = { authenticated: false, user: null };
try {
    const token = getFromLocalStorage('token');
    const userId = getFromLocalStorage('userId');
    if (!token) {
    return defaultReturnObject;
    }
    return { authenticated: true, user: { userId, token } };
} catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
}
}  

export const getSkills = async () => {
    try {
      const response = await axiosInstance.get('/skills');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const createSkill = async (skillData) => {
    try {
      const token = localStorage.token;
      const userId = localStorage.userId; // Récupérer l'userId à partir du localStorage ou de tout autre endroit approprié

      if (!userId) {
        throw new Error('UserId is missing in localStorage.'); // Gérer l'erreur si l'userId est manquant
      }
  
      const response = await axios.post(API_ROUTES.SKILLS, skillData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateSkill = async (skillId, skillData) => {
    try {
      const response = await axiosInstance.put(`/skills/${skillId}`, skillData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteSkill = async (skillId) => {
    try {
      const response = await axiosInstance.delete(`/skills/${skillId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fonctions pour les expériences professionnelles
  export const getExperiences = async () => {
    try {
      const response = await axiosInstance.get('/experiences');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const createExperience = async (experienceData) => {
    try {
      const response = await axiosInstance.post('/experiences', experienceData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateExperience = async (experienceId, experienceData) => {
    try {
      const response = await axiosInstance.put(`/experiences/${experienceId}`, experienceData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteExperience = async (experienceId) => {
    try {
      const response = await axiosInstance.delete(`/experiences/${experienceId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export function storeInLocalStorage(token, userId) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }
  
  // Fonctions pour l'authentification
  export const register = async (userData) => {
    try {
      const response = await axiosInstance.post(API_ROUTES.SIGN_UP, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const login = async (userData) => {
    try {
      const response = await axiosInstance.post(API_ROUTES.SIGN_IN, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export default axiosInstance;