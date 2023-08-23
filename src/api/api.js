import axios from 'axios';
import { API_ROUTES } from '../constants';

const baseURL = 'http://localhost:4000/api';

//Logique du contact
export const sendEmail = async (emailData) => {
  try {
    const response = await axios.post(API_ROUTES.EMAIL, emailData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


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

//Logique des Skills

export const getSkills = async () => {
    try {
      const response = await axiosInstance.get(API_ROUTES.SKILLS);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export async function getOneSkill(skillId) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${API_ROUTES.SKILLS}/${skillId}`,
      });
      console.log(skillId);
      const skill = response.data;
      console.log(skill);
      // eslint-disable-next-line no-underscore-dangle
      skill.id = skill._id;
      return skill;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
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
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        UserId: userId, // Utilisez le bon type de contenu ici
      };
      const response = await axiosInstance.put(`${API_ROUTES.SKILLS}/${skillId}`, skillData, {
        headers,
    });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteSkill = async (skillId) => {
    const token = localStorage.getItem('token');
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axiosInstance.delete(`${API_ROUTES.SKILLS}/${skillId}`, {
            headers,
        });
        
        return response.data;
    } catch (error) {
        throw error;
    }
};
  
  // Fonctions pour les expériences professionnelles
  export const getExperiences = async () => {
    try {
      const response = await axiosInstance.get(API_ROUTES.EXPERIENCES);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const createExperience = async (experienceData) => {
    try {
      const token = localStorage.token;
      const userId = localStorage.userId;

      const response = await axiosInstance.post(API_ROUTES.EXPERIENCES, experienceData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export async function getOneExperience(experienceId) {
    console.log(experienceId);
    try {
      const response = await axios({
        method: 'GET',
        url: `${API_ROUTES.EXPERIENCES}/${experienceId}`,
      });
      const experience = response.data;
      // eslint-disable-next-line no-underscore-dangle
      experience.id = experience._id;
      return experience;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  export const updateExperience = async (experienceId, experienceData) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        UserId: userId,
      };
      const response = await axiosInstance.put(`${API_ROUTES.EXPERIENCES}/${experienceId}`, experienceData,{
        headers
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteExperience = async (experienceId) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        UserId: userId,
      };
      const response = await axiosInstance.delete(`${API_ROUTES.EXPERIENCES}/${experienceId}`, {headers});
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