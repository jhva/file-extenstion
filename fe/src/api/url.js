let url = 'http://localhost:3030/api-v1/';
// https://port-0-be-file-extenstion-jvvy2blm9hzkrv.sel5.cloudtype.app:3030/api-v1/
if (process.env.NODE_ENV === 'production') {
  url = process.env.REACT_APP_SERVER_URL;
}

export const BASE_URL = url;
