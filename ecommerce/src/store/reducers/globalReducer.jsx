import { FETCH_STATES, GET_ROLES_FROM_API } from "../actions/globalActions";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
  cfetchstate: FETCH_STATES.notFetched,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES_FROM_API:
      const roles = {
        ...state,
        roles: action.payload,
      };
      return roles;
    default:
      return state;
  }
};
