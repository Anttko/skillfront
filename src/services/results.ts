//import { loadUser } from './storage';
import { SaveResultsType } from '../types/types';
import axios from '../utils/apiClient';

const baseUrl = 'api/results';


/*
const headers = {
  Authorization: loadUser() ? `Bearer ${loadUser().token}` : null,
};*/

export const saveResults = async (results: SaveResultsType): Promise<void> => {
  const response = await axios.post(baseUrl, results);
  return response.data;
};
