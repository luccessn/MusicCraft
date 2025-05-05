/* eslint-disable prettier/prettier */
/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */

// import { jwtDecode } from "jwt-decode";
// import { toggleLocalStorage } from "../Utils/jwt";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./AppActions";

const initials = {
  // isAuthanticated: false,
  // user: null,
  cartItems: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export { initials, reducer };
// switch (type) {
//   case AppActions.AUTHENTICATED: {
//     const user = jwtDecode(payload);
//     return { ...state, isAuthanticated: true, user: user };
//   }
//   case AppActions.LOG_IN: {
//     const { token } = payload;
//     const user = jwtDecode(token);
//     toggleLocalStorage(token);
//     return { ...state, isAuthanticated: true, user };
//   }
//   case AppActions.LOG_OUT:
//     toggleLocalStorage();
//     return { ...state, isAuthanticated: false, user: null };
//   default:
//     return state;
// }

//cart
// case AppActions.UPDATE_CART_ITEM_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === payload.id
//             ? { ...item, quantity: payload.quantity }
//             : item
//         ),
//       };
