import axios from 'axios'

export const getCompanyBySymbol = (query) => {
  return axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`);
};

export const getAdditionalCompanyData = (symbol) => {
  return axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`);
};

export const getDomainAndLogo = (name) => {
  return axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`);
};
