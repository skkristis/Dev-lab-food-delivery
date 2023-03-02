import axios from 'axios';
// import { useToast } from '@chakra-ui/react';
// const toast = useToast();

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('accessToken') !== null) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        'accessToken'
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      axios.post('/auth/logout').then((response) => {
        console.log(response);
      });
    } else {
      // toast({
      //   title: `${status} toast`,
      //   status: 'error',
      //   isClosable: true,
      //   duration: 9000,
      // });
      alert(error.response?.message);
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
