import { axiosInstance } from "../../api/api";
import { postOrdersData } from "../actions/shoppingCartActions";

export const postOrders = (orders) => {
  return (dispatch, getState) => {
    axiosInstance
      .post("/order", orders)
      .then((res) => dispatch(postOrdersData(res.data)))
      .catch((err) => console.log("ERROR OCCURED WHEN POSTING ORDERS"));
  };
};
