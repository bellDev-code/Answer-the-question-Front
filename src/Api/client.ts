import axios from 'axios';

export const BASE_URL = 'http://localhost:8888';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
