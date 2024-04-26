import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  axios.interceptors.response.use(
    (response) => {
      const res = response.data;
      if (res.status !== 200) {
        console.log("Intercepting response:", response);
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
