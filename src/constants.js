const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  SKILLS: `${API_URL}/api/skills`,
  SKILLSID: `${API_URL}/api/skills/:id`,
  EXPERIENCES: `${API_URL}/api/experience`,         
  EXPERIENCESID: `${API_URL}/api/experience/:id`, 
  EMAIL: `${API_URL}/send-mail`,
};

export const APP_ROUTES = {
  SIGN_UP: '/login',
  SIGN_IN: '/login',
  ADD_BOOK: '/Ajouter',
  BOOK: '/',
  PROJET: '/projet',
};
