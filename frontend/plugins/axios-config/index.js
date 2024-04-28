import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = "http://localhost:3000"
  
  axios.interceptors.response.use(
    (response) => {
      const res = response.data;
      if (res.status !== 200) {
        console.log("Data from API has been successfully got!",);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: axios,
    },
  };
});
