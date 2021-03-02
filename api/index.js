import axios from 'axios';
import { url } from '../config.json';

const baseUrl = `${url}/v1`;

export default {
  fetchBreeds() {
    const request = axios.create({
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return request.get(`${baseUrl}/breeds?limit=10&page=0`);
  },

  fetchFavourites(subId) {
    const request = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'DEMO-API-KEY'
      }
    });
    return request.get(`${baseUrl}/favourites?sub_id=${subId}`);
  },

  postFavourites(data) {
    const request = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'DEMO-API-KEY'
      }
    });
    return request.post(`${baseUrl}/favourites`, data);
  },

  fetchRandomImage(breedId) {
    const request = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'DEMO-API-KEY'
      }
    });
    return request.get(`${baseUrl}/images/search?breed_ids=${breedId}&include_breeds=true`);
  }
}
