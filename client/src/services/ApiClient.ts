import { config } from "../config";
import { IHotel } from "../interfaces/IHotel";
import { IPlace } from "../interfaces/IPlace";

const baseUrl = 'https://api.foursquare.com/v3/places/';

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: config.FOURSQUARE_API_TOKEN,
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

//coordinates should be changed here, based on current location ?
const fetchHotels = async(): Promise<IHotel[]> => {
  const response = await fetch(`${baseUrl}nearby?ll=52.24%2C0.71&query=hotels&limit=10`, options)
  const body = await response.json();
  return body.results;
}


export { fetchWithFilters, CATEGORIES, fetchHotels }

