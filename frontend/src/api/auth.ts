import axios from "axios";

const BASE_URL = "https://auth-back-3dcc.onrender.com";

interface SignupData {
  username: string;
  mail: string;
  password: string;
}

interface LoginData {
  mail: string;
  password: string;
}

export const signupUser = (data: SignupData) => {
  return axios.post(`${BASE_URL}/signup`, data);
};

export const loginUser = (data: LoginData) => {
  return axios.post(`${BASE_URL}/login`, data);
};
