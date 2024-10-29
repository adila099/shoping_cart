import { ADD_TODO_SUCCESS,REMOVE_TODO_SUCCESS,UPDATE_TODO_SUCCESS } from "../action/todoAction";

const initialState = {
  todo: [],
//   totalCount: 0,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:

  }
     

//     case REMOVE_CART_SUCCESS:
//       const itemId = action.payload;
//       const existingCart = Array.isArray(state.cart) ? state.cart : [];

//       const itemToRemove = existingCart.find((item) => item.id === itemId);

//       if (itemToRemove) {
//         if (itemToRemove.count > 1) {
//           const updatedCart = existingCart.map((item) =>
//             item.id === itemId
//               ? { ...item, count: item.count - 1 }
//               : item
//           );

//           return {
//             ...state,
//             cart: updatedCart,
//             totalCount: Number(state.totalCount) - 1,
//             error: null,
//           };
//         } else {
//           const updatedCart = existingCart.filter((item) => item.id !== itemId);

//           return {
//             ...state,
//             cart: updatedCart,
//             totalCount: Number(state.totalCount) - 1,
//             error: null,
//           };
//         }
//       }

//       return state;

//     case CLEAR_CART_SUCCESS:
//       return {
//         ...state,
//         cart: [],
//         totalCount: 0,
//         error: null,
//       };

//     default:
//       return state;
//   }
};

export default cartReducer;
