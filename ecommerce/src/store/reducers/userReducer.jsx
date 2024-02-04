import { FETCH_STATES } from "../actions/globalActions";
import { POST_SIGNUP_DATA_TO_API } from "../actions/userActions";

const initialState = {
  newUsers: [],
  user: {},
  address: {},
  payment: {},
  userfetchstate: FETCH_STATES.notFetched,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_DATA_TO_API:
      const newUser = {
        ...state,
        newUsers: [...state.newUsers, { ...action.payload }],
      };
      return newUser;
    default:
      return state;
  }
};
