import axios from '../utils/apiClient';
const baseUrl = 'api/soft';





const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export { getAll /*setToken */ };
