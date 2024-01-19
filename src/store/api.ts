import axios from "axios";
const api = axios.create({
    baseURL: `http://localhost:3000/api/v1/user/`, // our API base URL
  });

  api.interceptors.request.use(
    (config) => {
      // const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api 
