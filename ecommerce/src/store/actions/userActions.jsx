export const GET_USER_PAYMENT = "GET_USER_PAYMENT";
export const GET_USER_ADDRESS = "GET_USER_ADDRESS";
export const POST_SIGNUP_DATA_TO_API = "POST_SIGNUP_DATA_TO_API";
export const POST_LOGIN_DATA_TO_API = "POST_LOGIN_DATA_TO_API";

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
export const postSignupDataToApi = (sign) => {
  return {
    type: POST_SIGNUP_DATA_TO_API,
    payload: sign,
  };
};
export const postLoginDataToApi = (login) => {
  return {
    type: POST_LOGIN_DATA_TO_API,
    payload: login,
  };
};
