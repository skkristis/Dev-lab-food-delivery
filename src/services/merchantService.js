import axios from './axios';

const getCategoryList = async ({ queryKey }) => {
  const [, type] = queryKey;
  const response = await axios.get(`/api/merchants/${type}/categories`);
  return response.data;
};

const getMerchantList = async ({ pageParam: next_cursor, queryKey }) => {
  const [, queryParam] = queryKey;
  const cursorParam = { cursor: next_cursor };

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
