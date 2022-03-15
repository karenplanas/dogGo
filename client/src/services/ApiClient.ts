import { config } from "../config";
import { IHotel } from "../interfaces/IHotel";
import { IPlace } from "../interfaces/IPlace";
import { ILoginMethod, IUser } from "../interfaces/IUser";

const baseUrl = 'https://api.foursquare.com/v3/places/';
const socialLoginUrl = 'http://localhost:3001/social-login';

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

//coordinates should be changed here, based on current location 
const fetchHotels = async(): Promise<IHotel[]> => {
  const response = await fetch(`${baseUrl}nearby?ll=52.24%2C0.71&query=hotels&limit=10`, options)
  const body = await response.json();
  return body.results;
}

interface PerformRequestParameters {
  method?: string;
  path: string;
  body?: unknown;
  token?: string;
}

const performRequest = async <T>({
  method,
  path,
  body,
  token
}: PerformRequestParameters): Promise<T> => {
  const options = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    body: body ? JSON.stringify(body) : undefined
  };
  const response = await fetch(path, options);
  return response.json() as unknown as T;
};


const processLogin = async (loginMethod: ILoginMethod): Promise<IUser> => {
  return performRequest<{ data: IUser }>({ 
    method: 'POST', 
    path: socialLoginUrl,
    body: loginMethod
  }).then((r) => r.data)
}


export { fetchWithFilters, CATEGORIES, fetchHotels, processLogin }

