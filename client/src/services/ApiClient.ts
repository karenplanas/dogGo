import { IPlace } from "../interfaces/IPlace";

const baseUrl = 'https://api.foursquare.com/v3/places/';

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "fsq3qx9qlhqnNGwk86iRqQd7xt0tH9hVD5fk+5VhNkjbt7E=",
  },
};

const CATEGORIES = {
  shop: 17110,
  vet: 15054,
  groomer: 11134 
} 

const fetchWithFilters = async (
  categories: ('shop' | 'vet' | 'groomer')[], 
  { sw, ne }: { 
    sw:[number, number], 
    ne: [number, number]
  }): Promise<IPlace[]> => {
  const cat = categories.map(c => CATEGORIES[c]).join(',');
  const response = await fetch(`${baseUrl}search?categories=${cat}&limit=50&sw=${sw.join(',')}&ne=${ne.join(',')}&sort=distance`, options);
  const body = await response.json();
  return body.results;
};


export { fetchWithFilters, CATEGORIES }

