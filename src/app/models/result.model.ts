import { Types } from './types.model';

export interface Result {
  isRaining?: boolean;
  temp?: number;
  pokemonName?: string;
  pokemonType?: Types;
}
