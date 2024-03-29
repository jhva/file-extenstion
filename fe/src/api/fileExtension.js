import api from './api';

export const postCustomExtension = async (body) => {
  let result;
  try {
    result = await api.post('/fileExtension', body);
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
    alert(e?.response?.data?.msg);
    result = false;
  }

  return result;
};
export const deleteCustomExtension = async (id) => {
  let result;
  try {
    result = await api.delete(`/fileExtension/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    alert(e?.response?.data?.msg);
    result = false;
  }

  return result;
};

export const postFixFileExtension = async (body) => {
  console.log(body);
  let result;
  try {
    result = await api.post('/fileExtension/fix', body, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    alert(e?.response?.data?.msg);
    result = false;
  }

  return result;
};
export const getFixFileExtension = async () => {
  let result;
  try {
    result = await api.get('/fileExtension/fix', {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    alert(e?.response?.data?.msg);
    result = false;
  }
  return result;
};
