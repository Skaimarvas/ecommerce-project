import { FETCH_STATES } from "../actions/globalActions";

const initialState = {
  newUsers: [],
  user: {},
  address: {},
  payment: {},
  userfetchstate: FETCH_STATES.notFetched,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
