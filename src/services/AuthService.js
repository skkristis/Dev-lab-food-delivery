import axios from './axios';

class Auth {
  async login(email, password) {
    return await axios.get('/sanctum/csrf-cookie').then(async () => {
      const status = await axios.post('/auth/login', { email, password });
      return status === 204;
    });
  }

  async register(user) {
    const userData = {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password,
      password_confirmation: user.password,
      adult_agree: user.isAdult,
      terms_agree: user.termsAgree,
    };

    return await axios.get('/sanctum/csrf-cookie').then(async () => {
      const status = await axios.post('/auth/register', userData);
      return status === 204;
    });
  }

  async logout() {
    const status = await axios.get('/auth/logout');
    return status === 204;
  }

  async me() {
    const user = await axios.get('/api/me');
    return user;
  }
}

export default new Auth();
