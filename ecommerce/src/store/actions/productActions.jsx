export const GET_PRODUCT_FROM_API = "GET_PRODUCT_FROM_API";
export const GET_BESTS_FROM_API = "GET_BESTS_FROM_API";

export const getProductFromApi = (product) => {
  return {
    type: GET_PRODUCT_FROM_API,
    payload: product,
  };
};
export const getBestsFromApi = (bests) => {
  return {
    type: GET_BESTS_FROM_API,
    payload: bests,
  };
};
