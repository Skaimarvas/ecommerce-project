export const SET_CATEGORIES_FETCH_STATE = "SET_CATEGORIES_FETCH_STATE";
export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FAILED",
};
export const GET_ROLES_FROM_API = "GET_ROLES_FROM_API";
export const setCategoriesFetchState = (fetchstate) => {
  return {
    type: SET_CATEGORIES_FETCH_STATE,
    payload: fetchstate,
  };
};
export const getRolesFromApi = (roles) => {
  return {
    type: GET_ROLES_FROM_API,
    payload: roles,
  };
};
