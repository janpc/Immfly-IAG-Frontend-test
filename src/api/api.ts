import { get } from './api-utils';

export function getPokemonsByGeneration(generation: number = 1): Promise<any> {
  return get(`generation/${generation}`);
}

export function getPokemonByName(name: string): Promise<any> {
  return get(`pokemon/${name}`);
}
