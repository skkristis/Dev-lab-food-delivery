import axios from './axios';

const getRestaurantMenu = async (id) => {
  const response = await axios.get(`/api/merchants/${id}`);
  return response.data.data;
};

const restaurantInspectService = {
  getRestaurantMenu,
};

export default restaurantInspectService;
