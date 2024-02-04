import { FETCH_STATES } from "../actions/globalActions";
import {
  GET_BESTS_FROM_API,
  GET_PRODUCT_FROM_API,
  GET_TOTAL_PRODUCTS_COUNT,
  GET_PRODUCT_DETAIL,
} from "../actions/productActions";

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
    case GET_PRODUCT_FROM_API:
      const products = {
        ...state,
        productlist: [...state.productlist, ...action.payload],
      };
      return products;
    case GET_TOTAL_PRODUCTS_COUNT:
      const total = {
        ...state,
        productcount: action.payload,
      };
      return total;
    case GET_PRODUCT_DETAIL:
      const detail = {
        ...state,
        pdetail: { ...action.payload },
      };
      return detail;
    default:
      return state;
  }
};
