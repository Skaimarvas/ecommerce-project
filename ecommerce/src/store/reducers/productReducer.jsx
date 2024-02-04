import { FETCH_STATES } from "../actions/globalActions";
import { GET_BESTS_FROM_API } from "../actions/globalActions";

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
    case GET_BESTS_FROM_API:
      const bestproduct = {
        ...state,
        bproductlist: action.payload,
      };
      return bestproduct;
    default:
      return state;
  }
};
