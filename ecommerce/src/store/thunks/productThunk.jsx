import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";
import { FETCH_STATES } from "../actions/globalActions";
import {
  setProductFetchState,
  getProductFromApi,
  getTotalProductsCount,
} from "../actions/productActions";

export const getProduct = (param) => {
  return (dispatch, getState) => {
    dispatch(setProductFetchState(FETCH_STATES.fetching));
    axiosInstance
      .get(`products${param ? param : ""}`)
      .then((res) => {
        dispatch(getProductFromApi(res.data.products));
        dispatch(getTotalProductsCount(res.data.total));
        dispatch(setProductFetchState(FETCH_STATES.fetched));
      })
      .catch((err) => {
        toast.error(err.message);
        dispatch(setProductFetchState(FETCH_STATES.failed));
      });
  };
};

export const getBproduct = (param) => {};

export const getDetail = (param) => {};
