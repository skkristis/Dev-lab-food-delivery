import axios from './axios';

const getRestaurantItem = async () => {
  const response = await axios.get(`/api/discover`);
  return response.data;
};

const discoveryService = {
  getRestaurantItem,
};

export default discoveryService;
