import { FETCH_STATES } from "../actions/globalActions";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
  cfetchstate: FETCH_STATES.notFetched,
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
