import {
  ADD_PRODUCT_TO_CART,
  CHECKED_PRODUCT,
  DECREASE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_ADDRESS,
  INCREASE_PRODUCT_FROM_CART,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payments: [],
  addresses: [],
  orders: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const existingProduct = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingProduct !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProduct].count += action.payload.count;

        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
      break;
    case DELETE_PRODUCT_FROM_CART:
      const deletedProduct = state.cart.filter(
        (item) => item.product.id !== action.payload
      );

      return {
        ...state,
        cart: [...deletedProduct],
      };
    case DECREASE_PRODUCT_FROM_CART:
      const decreasedProduct = state.cart.findIndex(
        (item) => item.product.id === action.payload
      );

      if (decreasedProduct !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[decreasedProduct].count > 1) {
          updatedCart[decreasedProduct].count -= 1;
        }
        return {
          ...state,
          cart: updatedCart,
        };
      }
      break;
    case INCREASE_PRODUCT_FROM_CART:
      const increasedProduct = state.cart.findIndex(
        (item) => item.product.id === action.payload
      );

      if (increasedProduct !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[increasedProduct].count += 1;
        return {
          ...state,
          cart: updatedCart,
        };
      }
      break;
    case CHECKED_PRODUCT:
      const checkedProduct = state.cart.findIndex(
        (item) => item.product.id === action.payload
      );

      if (checkedProduct != -1) {
        const copyCat = [...state.cart];
        copyCat[checkedProduct].checked = !copyCat[checkedProduct].checked;
        return { ...state, cart: copyCat };
      } else {
        return { ...state };
      }
    case GET_ADDRESS:
      const address = {
        ...state,
        addresses: [...state.addresses, ...action.payload],
      };
      return address;
    default:
      return state;
  }
};
