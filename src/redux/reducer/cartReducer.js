import {
  ADD_CART_SUCCESS,
  REMOVE_CART_SUCCESS,
  CLEAR_CART_SUCCESS,
  DATA_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
} from "../action/cartAction";

const initialState = {
  cart: [],
  shop: [],
  totalCount: 0,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_SUCCESS:
      const newItem = action.payload;
      const currentCart = Array.isArray(state.cart) ? state.cart : [];
      const existingItem = currentCart.find((item) => item.id === newItem.id);
      if (existingItem) {
        const updatedCart = currentCart.map((item) =>
          item.id === newItem.id ? { ...item, count: item.count + 1 } : item
        );

        return {
          ...state,
          cart: updatedCart,
          totalCount: Number(state.totalCount) + 1,
        };
      } else {
        return {
          ...state,
          cart: [...currentCart, newItem],
          totalCount: Number(state.totalCount) + 1,
        };
      }

    case REMOVE_CART_SUCCESS:
      const itemId = action.payload;
      const existingCart = Array.isArray(state.cart) ? state.cart : [];

      const itemToRemove = existingCart.find((item) => item.id === itemId);

      if (itemToRemove) {
        if (itemToRemove.count > 1) {
          const updatedCart = existingCart.map((item) =>
            item.id === itemId ? { ...item, count: item.count - 1 } : item
          );

          return {
            ...state,
            cart: updatedCart,
            totalCount: Number(state.totalCount) - 1,
            error: null,
          };
        } else {
          const updatedCart = existingCart.filter((item) => item.id !== itemId);

          return {
            ...state,
            cart: updatedCart,
            totalCount: Number(state.totalCount) - 1,
            error: null,
          };
        }
      }

      return state;

    case CLEAR_CART_SUCCESS:
      return {
        ...state,
        cart: [],
        totalCount: 0,
      };

    case DATA_SUCCESS:
      return {
        ...state,
        shop: action.payload,
      };

    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        error: null,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        shop: state.shop.filter((shop) => shop.id !== action.payload), // Filter out deleted product
      };

    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
