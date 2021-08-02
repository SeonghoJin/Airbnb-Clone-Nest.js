import axios from 'axios';
const SERVER_PRE = 'http://localhost:3000';

export const vaildId = (id: string) => {
  if (id.trim() === '') return false;
  return true;
};

export const vaildPassword = (password: string, repassword: string) => {
  if (password.trim() === '') return false;
  if (password.trim() !== repassword.trim()) return false;
  return true;
};

export const vaildSignUp = (
  id: string,
  password: string,
  repassword: string,
) => {
  return vaildId(id) && vaildPassword(password, repassword);
};

export const requestSignUp = async (
  id: string,
  password: string,
  repassword: string,
) => {
  const response = await axios.post(SERVER_PRE + '/auth/sign-up', {
    id: id,
    password: password,
  });

  return response.data;
};

export const requestSignIn = async (id: string, password: string) => {
  const response = await axios.post(SERVER_PRE + `/auth/sign-in`, {
    id: id,
    password: password,
  });

  return response.data;
};

export const requestLogout = async (id: string) => {
  const response = await axios.delete(SERVER_PRE + `/auth/logout/${id}`);
  return response.data;
};
