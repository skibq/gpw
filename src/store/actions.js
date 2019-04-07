export function addCompany(company) {
  return { type: 'ADD_COMPANY', company }
}
export function removeCompany(index) {
  return { type: 'REMOVE_COMPANY', index }
}
export function setCompanies(index) {
  return { type: 'SET_COMPANIES', index }
}
