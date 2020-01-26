import axios from 'axios';

const api = axios.create({
  baseURL: 'https://daniel-rocketshoes-backend.herokuapp.com',
});

export default api;
