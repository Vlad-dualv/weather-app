import { refs } from '../main.js';

export function render(data) {
  refs.weatherContainer.classList.add('show');
  refs.cityName.innerHTML = data.name;
  refs.temperature.innerHTML = Math.round(data.main.temp) + '°C';
  refs.humidity.innerHTML = data.main.humidity + '%';
  refs.windSpeed.innerHTML = data.wind.speed + ' Km/h';

  switch (data.weather[0].main) {
    case 'Clouds':
      refs.weatherIcon.src = '/clouds.png';
      break;
    case 'Drizzle':
      refs.weatherIcon.src = '/drizzle.png';
      break;
    case 'Mist':
      refs.weatherIcon.src = '/mist.png';
      break;
    case 'Snow':
      refs.weatherIcon.src = '/snow.png';
      break;
    case 'Rain':
      refs.weatherIcon.src = '/rain.png';
      break;
    default:
      refs.weatherIcon.src = '/clear.png';
  }
}
