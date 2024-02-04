export const GET_USER_PAYMENT = "GET_USER_PAYMENT";
export const getUserPaymentData = (payment) => {
  return {
    type: GET_USER_PAYMENT,
    payload: payment,
  };
};
