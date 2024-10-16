import axios from 'axios';
import { getWeather } from './js/weatherAPI';
import { render } from './js/render';

export const refs = {
  form: document.querySelector('form'),
  searchInput: document.getElementById('query'),
  searchBtn: document.querySelector('button'),
  weatherContainer: document.querySelector('.weather'),
  weatherIcon: document.querySelector('.weather-icon'),
  weatherDescription: document.querySelector('.description'),
  cityName: document.querySelector('.city'),
  temperature: document.querySelector('.temperature'),
  humidity: document.querySelector('.humidity'),
  windSpeed: document.querySelector('.wind'),
};

export let query = '';

refs.form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  query = refs.searchInput.value.trim();
  if (query !== '') {
    try {
      const data = await getWeather(query);
      render(data);
    } catch (error) {
      console.log(error);
      alert('Invalid city name');
    }
  } else {
    alert('Empty field!');
  }
  refs.form.reset();
}
