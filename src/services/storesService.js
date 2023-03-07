import axios from 'axios';

const getRestaurantList = async ({
  pageParam = `https://70.34.250.230/api/merchants?filter_equals_type=restaurant`,
}) => {
  const response = await axios.get(pageParam);
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
