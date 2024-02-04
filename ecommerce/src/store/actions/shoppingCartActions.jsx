export const CLEAR_CART = "CLEAR_CART";
export const GET_ADDRESS = "GET_ADDRESS";
export const POST_ORDERS = "POST_ORDERS";
export const GET_PAYMENT = "GET_PAYMENT";
export const POST_PAYMENT = "POST_PAYMENT";

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const getAddressData = (adress) => {
  return {
    type: GET_ADDRESS,
    payload: adress,
  };
};
export const postAddressData = (adress) => {
  return {
    type: POST_ADDRESS,
    payload: adress,
  };
};
export const getPaymentData = (payment) => {
  return {
    type: GET_PAYMENT,
    payload: payment,
  };
};
export const postPaymentData = (payment) => {
  return {
    type: POST_PAYMENT,
    payload: payment,
  };
};
