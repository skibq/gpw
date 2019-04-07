const initialState = {
  companies: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return {
        ...state.companies,
        companies: [...state.companies, action.company]
      };
    default:
      return state
  }
};
