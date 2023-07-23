const baseUrl = 'api/auth';
import axios from '../utils/apiClient';

export const login = async (hashkey: string) => {
  const response = await axios.post(baseUrl, { hashkey });
  return response.data;
};
