import axios from 'axios';
import { refs, query } from './main';

const API_KEY = 'f1fbcd3bf9d191b55c2bb9d6bb99db04';
const myAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

export async function getWeather() {
  const params = {
    appid: API_KEY,
    q: query,
    units: 'metric',
  };

  const response = await myAxios.get('', { params });
  return response.data;
}
