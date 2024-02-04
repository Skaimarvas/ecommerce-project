import { FETCH_STATES } from "../actions/globalActions";

FETCH_STATES;

const initalState = {
  productlist: [],
  bproductlist: [],
  pdetail: "",
  productcount: "",
  pagecount: "",
  activepage: "",
  detailstate: FETCH_STATES.notFetched,
  bfetchstate: FETCH_STATES.notFetched,
  fetchstate: FETCH_STATES.notFetched,
};

export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
