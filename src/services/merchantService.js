import axios from './axios';

const getCategoryList = async ({ queryKey }) => {
  const [_, type] = queryKey;
  const response = await axios.get(`/api/merchants/${type}/categories`);
  return response.data;
};

const getMerchantList = async ({ pageParam, queryKey }) => {
  const [_, queryParam] = queryKey;
  const cursorParam = { cursor: pageParam };

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
