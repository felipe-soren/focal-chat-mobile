import axios from 'axios';

const api = axios.create({
  baseURL: 'https://focal-chat-backend.herokuapp.com',
});

export default api;
