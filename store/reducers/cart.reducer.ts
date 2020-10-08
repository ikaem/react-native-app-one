import CartItem from "../../models/cart-item.model";
import { cartItems } from "../../data/fake-data";
import {
  ADD_CART_ITEM,
  ADJUST_CART_ITEM,
  AddCartItemActionInterface,
  AdjustCartItemActionInterface,
  EMPTY_CART,
  EmptyCartInterface,
} from "../actions/cart.actions";

interface CartStateInterface {
  cartItems: CartItem[];
  numberOfItems: number;
  subtotal: number;
}

export type CartReducerActionTypes =
  | AddCartItemActionInterface
  | AdjustCartItemActionInterface
  | EmptyCartInterface;

const initialState = {
  cartItems: [],
  numberOfItems: 0,
  subtotal: 0,
};

export default (
  state: CartStateInterface = initialState,
  action: CartReducerActionTypes
) => {
  switch (action.type) {
    case EMPTY_CART:
      return initialState;

    case ADJUST_CART_ITEM:
      // need find this item
      const { cartItemId, adjustedQuantity } = action.payload;

      const oldCartItem = state.cartItems.find(
        (cartItem) => cartItem.cartItemId === cartItemId
      );

      if (!oldCartItem) {
        console.log("No such cart item");
        return state;
      }

      const { cartItemPrice } = oldCartItem;
      const adjustedCartItem = {
        ...oldCartItem,
        cartItemQuantity: adjustedQuantity,
        cartItemSubtotal: adjustedQuantity * cartItemPrice,
      };

      const filteredCartItems = state.cartItems.filter(
        (cartItem) => cartItem.cartItemId !== cartItemId
      );

      const adjustedCartItems = adjustedQuantity
        ? [...filteredCartItems, adjustedCartItem].sort((a, b) =>
            a.cartItemId > b.cartItemId ? 1 : -1
          )
        : filteredCartItems;
      const adjustedNumberOfItems = adjustedCartItems.length;
      const adjustedSubtotal = adjustedCartItems.reduce((acc, val) => {
        return acc + val.cartItemSubtotal;
      }, 0);

      const newState = {
        cartItems: adjustedCartItems,
        numberOfItems: adjustedNumberOfItems,
        subtotal: adjustedSubtotal,
      };

      console.log("new state from cart reducer", newState);
      return {
        ...state,
        cartItems: adjustedCartItems,
        numberOfItems: adjustedNumberOfItems,
        subtotal: adjustedSubtotal,
      };

    case ADD_CART_ITEM:
      const newCartItems = [action.payload, ...state.cartItems].sort((a, b) =>
        a.cartItemId > b.cartItemId ? 1 : -1
      );

      const newNumberOfItems = newCartItems.length;

      const newSubtotal = newCartItems.reduce((acc, val) => {
        return acc + val.cartItemSubtotal;
      }, 0);

      return {
        ...state,
        cartItems: newCartItems,
        numberOfItems: newNumberOfItems,
        subtotal: newSubtotal,
      };

    default:
      return state;
  }
};
