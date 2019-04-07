const initialState = () => {
  const rawCompanies = localStorage.getItem('companies');
  const companies = JSON.parse(rawCompanies);
  return {
      companies: companies ? companies : []
  }
};

export const rootReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      console.log(state.companies)
      let addCompanyState = {
        companies: [...state.companies, action.company]
      };
      localStorage.setItem('companies', JSON.stringify(addCompanyState.companies))
      return addCompanyState;
    case 'REMOVE_COMPANY':
      let removeCompanyState = { companies: [...state.companies]};
      removeCompanyState.companies.splice(action.index, 1);
      localStorage.setItem('companies', JSON.stringify(removeCompanyState.companies));
      return removeCompanyState;
    default:
      return state
  }
};
