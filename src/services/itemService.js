import axios from './axios';

const discover = async () => {
  const response = await axios.get(`/api/discover`);
  return response.data;
};

const itemService = {
  discover,
};

export default itemService;
