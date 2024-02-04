import { axiosInstance } from "../../api/api";
import { postOrdersData, getOrdersData } from "../actions/shoppingCartActions";

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
