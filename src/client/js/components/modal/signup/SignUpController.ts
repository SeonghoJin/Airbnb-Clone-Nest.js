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

export const requestSignUp = (
  id: string,
  password: string,
  repassword: string,
) => {
  axios({
    method: 'post',
    url: SERVER_PRE + '/auth/sign-up',
    data: {
      id: id,
      password: password,
      repassword: repassword,
    },
  });
};

export const requestSignIn = (id: string, password: string) => {
  axios.post(SERVER_PRE + `/auth/sign-in`, {
    id: id,
    password: password,
  });
};
