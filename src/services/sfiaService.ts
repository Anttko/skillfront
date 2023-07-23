import axios from '../utils/apiClient';


const baseUrl = 'api/sfia';


/*
let token: string | null = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};*/

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const getAllWithFilter = async (filter: string) => {
  const response = await axios.get(`${baseUrl}?search=${filter}`);
  return response.data;
};

const getOne = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export { getAll, getOne /*setToken */, getAllWithFilter };
