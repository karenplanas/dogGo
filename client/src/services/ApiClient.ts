const baseUrl = 'https://api.foursquare.com/v3/places/';

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "fsq3qx9qlhqnNGwk86iRqQd7xt0tH9hVD5fk+5VhNkjbt7E=",
  },
};

const fetchShops = async () => {
  const response = await fetch(`${baseUrl}nearby?ll=52.24%2C0.71&query=pet%20supplies&limit=10`, options);
  return response.json();
};

const fetchVets = async () => {
  const response = await fetch(`${baseUrl}nearby?ll=52.24%2C0.71&query=veterinary&limit=10`, options);
  return response.json();
};

const fetchGroomers = async () => {
  const response = await fetch(`${baseUrl}nearby?ll=52.24%2C0.71&query=groomers&limit=10`, options);
  return response.json();
};

export { fetchShops, fetchVets, fetchGroomers }

