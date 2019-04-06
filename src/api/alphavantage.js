import axios from 'axios'

export const getCompanyBySymbol = (query) => {
  return axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=demo`);
};
