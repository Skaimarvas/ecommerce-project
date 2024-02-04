export const CLEAR_CART = "CLEAR_CART";
export const GET_ADDRESS = "GET_ADDRESS";

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
