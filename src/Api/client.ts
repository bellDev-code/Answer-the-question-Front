import axios from 'axios';

export const BASE_URL = 'https://qa-service-i3r6oclqbq-de.a.run.app';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
