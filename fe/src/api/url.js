let url = 'http://localhost:3030/api-v1/';

if (process.env.NODE_ENV === 'production') {
  url = process.env.REACT_APP_SERVER_URL;
}

export const BASE_URL = url;
