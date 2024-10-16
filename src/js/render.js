import { refs } from '../main.js';

export function render(data) {
  refs.weatherContainer.classList.add('show');
  refs.cityName.innerHTML = data.name;
  refs.temperature.innerHTML = Math.round(data.main.temp) + '°C';
  refs.humidity.innerHTML = data.main.humidity + '%';
  refs.windSpeed.innerHTML = data.wind.speed + ' Km/h';

  switch (data.weather[0].main) {
    case 'Clouds':
      refs.weatherIcon.src = '../src/img/search.png';
      break;
    case 'Drizzle':
      refs.weatherIcon.src = '../src/img/drizzle.png';
      break;
    case 'Mist':
      refs.weatherIcon.src = '../src/img/mist.png';
      break;
    case 'Snow':
      refs.weatherIcon.src = '../src/img/snow.png';
      break;
    case 'Rain':
      refs.weatherIcon.src = '../src/img/rain.png';
      break;
    default:
      refs.weatherIcon.src = '../src/img/clear.png';
  }
}
