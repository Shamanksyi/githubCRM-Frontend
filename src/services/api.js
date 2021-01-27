import axios from 'axios';

import { BASE_URL } from '../configuration/constants';

const api = axios.create({
  baseURL: BASE_URL
});


api.interceptors.request.use(
  (reqConfig) => {
    if (localStorage.getItem('token'))
      reqConfig.headers.authorization = 'Bearer ' + localStorage.getItem('token');

    return reqConfig;
  },

  (err) => Promise.reject(err)
);

api.interceptors.response.use((res) => res.data);

export default api;