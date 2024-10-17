import { refs } from './main';

export function render(data) {
  refs.weatherContainer.classList.add('show');
  refs.cityName.innerHTML = data.name;
  refs.temperature.innerHTML = Math.round(data.main.temp) + '°C';
  refs.humidity.innerHTML = data.main.humidity + '%';
  refs.windSpeed.innerHTML = data.wind.speed + ' Km/h';

  switch (data.weather[0].main) {
    case 'Clouds':
      refs.weatherIcon.textContent = '🌥️';
      break;
    case 'Drizzle':
      refs.weatherIcon.textContent = '🌦️';
      break;
    case 'Haze':
      refs.weatherIcon.textContent = '🌫️';
      break;
    case 'Snow':
      refs.weatherIcon.textContent = '❄️';
      break;
    case 'Rain':
      refs.weatherIcon.textContent = '🌧️';
      break;
    case 'Thunderstorm':
      refs.weatherIcon.textContent = '🌩️';
      break;
    case 'Clear':
      refs.weatherIcon.textContent = '☀️';
      break;
    default:
      refs.weatherIcon.textContent = '☁️';
  }
}
