import api from './api';

export const postCustomExtension = async (body) => {
  let result;
  try {
    result = await api.post('/fileExtension', body, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.log(e);
  }

  return result;
};
export const getCustomExtension = async (body) => {
  let result;
  try {
    result = await api.get('/fileExtension', {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.log(e);
  }

  return result;
};
