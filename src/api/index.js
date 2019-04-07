import axios from 'axios'

const API_KEY = '27AJ77PBRU1L8M1E'

export const getCompanyBySymbol = (query) => {
  return axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=${API_KEY}`);
};

export const getAdditionalCompanyData = (symbol) => {
  return axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${API_KEY}`);
};

export const getDomainAndLogo = (name) => {
  return axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`);
};
