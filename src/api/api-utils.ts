import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function get(url: string = ''): Promise<AxiosResponse> {
  return await axios.get(BASE_URL + url, {
    headers: {
      Accept: 'application/json'
    }
  });
}
