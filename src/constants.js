const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  SKILLS: `${API_URL}/api/skills`,
  SKILLSID: `${API_URL}/api/skills/:id`,
};

export const APP_ROUTES = {
  SIGN_UP: '/login',
  SIGN_IN: '/login',
  ADD_BOOK: '/Ajouter',
  BOOK: '/',
};
