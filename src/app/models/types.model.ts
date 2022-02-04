import { Weather } from './weather.model';

export type Types =
  | 'ice'
  | 'watter'
  | 'grass'
  | 'ground'
  | 'bug'
  | 'rock'
  | 'fire'
  | 'normal'
  | 'eletric';

export function getType(weather: Weather): Types {
  if (weather.isRaining) return 'eletric';

  if (weather.temp < 5) return 'ice';
  if (weather.temp < 10) return 'watter';
  if (weather.temp >= 12 && weather.temp < 15) return 'grass';
  if (weather.temp >= 15 && weather.temp < 21) return 'ground';
  if (weather.temp >= 23 && weather.temp < 27) return 'bug';
  if (weather.temp >= 27 && weather.temp <= 33) return 'rock';
  if (weather.temp > 33) return 'fire';

  return 'normal';
}