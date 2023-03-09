import axios from './axios';

const getCategoryList = async ({ queryKey }) => {
  const [, type] = queryKey;
  const response = await axios.get(`/api/merchants/${type}/categories`);
  return response.data;
};

const getMerchantList = async ({ pageParam, queryKey }) => {
  const [, queryParam] = queryKey;
  const response = await axios.get('/api/merchants', {
    params: cursorParam?.cursor ? cursorParam : queryParam,
  });

  return response.data;
};

const storesService = {
  getMerchantList,
  getCategoryList,
};

export default storesService;
