export function getPokemonsByGeneration(generation: number = 1): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello world!'), 1000);
  });
}

export function getPokemonByName(name: string): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello world!'), 1000);
  });
}
