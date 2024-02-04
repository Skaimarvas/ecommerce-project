export const GET_USER_PAYMENT = "GET_USER_PAYMENT";
export const GET_USER_ADDRESS = "GET_USER_ADDRESS";

export const getUserPaymentData = (payment) => {
  return {
    type: GET_USER_PAYMENT,
    payload: payment,
  };
};
export const getUserAddressData = (address) => {
  return {
    type: GET_USER_ADDRESS,
    payload: address,
  };
};
