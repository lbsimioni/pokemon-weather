import { Types } from './types.model';

export interface Result {
  isRaining?: boolean;
  temp?: number;
  city?: string;
  pokemonName?: string;
  pokemonImg?: string;
  pokemonType?: Types;
}
