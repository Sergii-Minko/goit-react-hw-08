import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};