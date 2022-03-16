import { config } from "../config";
import { IPlace } from "../interfaces/IPlace";
import { ILoginMethod, IUser } from "../interfaces/IUser";

const baseUrl = 'https://api.foursquare.com/v3/places/';
const socialLoginUrl = 'http://localhost:3001/social-login';

interface PerformRequestParameters {
  method?: string;
  path: string;
  body?: unknown;
  token?: string;
  queryParams?: object
}

const performRequest = async <T>({
  method,
  path,
  body,
  token,
  queryParams,
}: PerformRequestParameters): Promise<T> => {
  const options = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      Authorization: token || ''
    },
    body: body ? JSON.stringify(body) : undefined
  };

  if(queryParams) {
    const queryParamsString = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`).join('&')
    path = `${path}?${queryParamsString}`
  }

  const response = await fetch(path, options);
  return response.json() as unknown as T;
};

const CATEGORIES = {
  shop: 17110,
  vet: 15054,
  groomer: 11134,
  logding: 19009,
} 

const fetchWithFilters = (
  categories: ('shop' | 'vet' | 'groomer')[], 
  { sw, ne }: { 
    sw:[number, number], 
    ne: [number, number]
  }
): Promise<IPlace[]> => {
    const cat = categories.map(c => CATEGORIES[c]).join(',');

    return performRequest<{ results: IPlace[] }>({
      method: 'GET',
      path: `${baseUrl}search`,
      token: config.FOURSQUARE_API_TOKEN,
      queryParams: {
        categories: cat,
        limit: 50,
        sw,
        ne,
        sort: 'distance',
      }
    }).then(resp => resp.results)

};

const fetchHotels = async(lat: number, long: number): Promise<IPlace[]> => {
  return performRequest<{ results: IPlace[]}>({
    method: 'GET',
    token: config.FOURSQUARE_API_TOKEN,
    path: `${baseUrl}search`,
    queryParams: {
      ll: [lat, long],
      categories: CATEGORIES.logding,
      limit: 20
    }
  }).then((resp) => resp.results)
}

const processLogin = async (loginMethod: ILoginMethod): Promise<IUser> => {
  return performRequest<{ data: IUser }>({ 
    method: 'POST', 
    path: socialLoginUrl,
    body: loginMethod
  }).then((r) => r.data)
}


export { fetchWithFilters, CATEGORIES, fetchHotels, processLogin }

