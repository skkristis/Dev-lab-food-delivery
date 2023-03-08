import axios from './axios';

const getCategoryList = async ({ queryKey }) => {
  const [_, type] = queryKey;
  const response = await axios.get(`/api/merchants/${type}/categories`);
  return response.data;
};

const getRestaurantList = async ({ pageParam }, queryKey) => {
  console.log(queryKey);
  const response = await axios.get(`/api/merchants?${pageParam}`);
  return response.data;
};
// const getShopList = async () => {
//   const response = await axios.get(`/api/merchants?filter_equals_type=shop`);
//   return response.data;
// };

const storesService = {
  getRestaurantList,
  getCategoryList,
  // getShopList,
};

export default storesService;
