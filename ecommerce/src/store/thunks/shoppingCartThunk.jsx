import { axiosInstance } from "../../api/api";
import {
  postOrdersData,
  getOrdersData,
  getAddressData,
  postAddressData,
  getPaymentData,
  postPaymentData,
} from "../actions/shoppingCartActions";

export const postOrders = (orders) => {
  return (dispatch, getState) => {
    axiosInstance
      .post("/order", orders)
      .then((res) => dispatch(postOrdersData(res.data)))
      .catch((err) => console.log("ERROR OCCURED WHEN POSTING ORDERS"));
  };
};
export const getOrders = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("/order")
      .then((res) => dispatch(getOrdersData(res.data)))
      .catch((err) => console.log("ERROR"));
  };
};
export const getAddress = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("/user/address")
      .then((res) => dispatch(getAddressData(res.data)))
      .catch((err) => console.log("ERROR OCCURED WHEN GETTING ADDRESS"));
  };
};
export const postAddress = (address) => {
  return (dispatch, getState) => {
    axiosInstance
      .post("/user/address", address)
      .then((res) => {
        dispatch(postAddressData(res.data["0"]));
      })
      .catch((err) => console.log("POST DATA", err));
  };
};
export const getPayment = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("/user/card")
      .then((res) => dispatch(getPaymentData(res.data)))
      .catch((err) => console.log("PAYMENT ERROR"));
  };
};
export const postPayment = (payment) => {
  return (dispatch, getState) => {
    axiosInstance
      .post("/user/card", payment)
      .then((res) => dispatch(postPaymentData(res.data["0"])))
      .catch((err) => console.log("POST PAYMENT ERROR"));
  };
};
