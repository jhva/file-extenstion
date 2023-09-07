import api from './api';

export const postCustomExtension = async (body) => {
  let result;
  try {
    result = await api.post('/fileExtension', body, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    alert(e?.response?.data?.msg);
    result = false;
  }

  return result;
};
export const getCustomExtension = async () => {
  let result;
  try {
    result = await api.get('/fileExtension', {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    result = e?.response;
  }

  return result;
};
export const deleteCustomExtension = async (id) => {
  let result;
  try {
    result = await api.delete('/fileExtension', {
      headers: { 'Content-Type': 'application/json' },
      params: id,
    });
  } catch (e) {
    console.log(e);
    result = e?.response;
  }

  return result;
};
