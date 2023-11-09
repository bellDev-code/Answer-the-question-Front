import axios from 'axios';

export const BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://qa-service-i3r6oclqbq-de.a.run.app' //gcr을 이용해 서버를 배포했을 때의 주소
    : 'http://localhost:8888';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
