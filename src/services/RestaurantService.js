import axios from './axios';

const getRestaurantList = async () => {
  const response = await axios.get(
    `/api/merchants?filter_equals_type=restaurant`
  );
  return response.data;
};
const getShopList = async () => {
  const response = await axios.get(`/api/merchants?filter_equals_type=shop`);
  return response.data;
};

const RestaurantService = {
  getRestaurantList,
  getShopList,
};

export default RestaurantService;
