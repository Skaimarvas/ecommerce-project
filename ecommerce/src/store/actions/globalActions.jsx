export const SET_CATEGORIES_FETCH_STATE = "SET_CATEGORIES_FETCH_STATE";
export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FAILED",
};

export const setCategoriesFetchState = (fetchstate) => {
  return {
    type: SET_CATEGORIES_FETCH_STATE,
    payload: fetchstate,
  };
};
