import api from '../api';

const authActions = {
  login: (username, password) => {
    return api.post('/auth/login', { username, password });
  },
  logout: () => {
    return api.post('/auth/logout');
  }
};

export default authActions;