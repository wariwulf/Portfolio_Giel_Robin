const axios = require('axios');

const baseURL = 'http://localhost:4000/api';

const register = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Exemple de données pour l'utilisateur
const userData = {
  email: 'test@example.com',
  password: 'testpassword'
};

// Appel de la fonction de test
register(userData)
  .then((data) => {
    console.log('Réponse du serveur:', data);
  })
  .catch((error) => {
    console.error('Erreur lors de la requête:', error.message);
  });