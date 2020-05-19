import axios from 'axios';

const { REACT_APP_API } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API,
  timeout: 1000,
});

export default api;
