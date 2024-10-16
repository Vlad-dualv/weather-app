import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getWeather } from './js/weatherAPI';
//import { render } from './js/render';

export const refs = {
  form: document.querySelector('form'),
  searchInput: document.getElementById('query'),
  searchBtn: document.querySelector('button'),
  weatherContainer: document.querySelector('.weather-container'),
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
      displayError('Invalid city name');
    }
  } else {
    displayError('Empty field!');
  }
  refs.form.reset();
}

/*---------*/

function render(data) {
  refs.weatherContainer.classList.add('show');
  refs.cityName.innerHTML = data.name;
  refs.temperature.innerHTML = Math.round(data.main.temp) + '°C';
  refs.humidity.innerHTML = data.main.humidity + '%';
  refs.windSpeed.innerHTML = data.wind.speed + ' Km/h';

  switch (data.weather[0].main) {
    case 'Clouds':
      refs.weatherIcon.src = './img/clouds.png';
      break;
    case 'Drizzle':
      refs.weatherIcon.src = './img/drizzle.png';
      break;
    case 'Mist':
      refs.weatherIcon.src = './img/mist.png';
      break;
    case 'Snow':
      refs.weatherIcon.src = './img/snow.png';
      break;
    case 'Rain':
      refs.weatherIcon.src = './img/rain.png';
      break;
    default:
      refs.weatherIcon.src = './img/clear.png';
  }
}

/*---------*/

function displayError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    backgroundColor: 'red',
    position: 'topCenter',
    timeout: 2000,
    maxWidth: '300px',
  });
}
