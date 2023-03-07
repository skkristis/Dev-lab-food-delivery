import axios from './axios';

const getRestaurantList = async ({
  pageParam = `/filter_equals_type=restaurant`,
}) => {
  const response = await axios.get(`/api/merchants?${pageParam}`);
  return response.data;
};
// const getShopList = async () => {
//   const response = await axios.get(`/api/merchants?filter_equals_type=shop`);
//   return response.data;
// };

const storesService = {
  getRestaurantList,
  // getShopList,
};

export default storesService;
