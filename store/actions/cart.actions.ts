import CartItem from "../../models/cart-item.model";

export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const ADJUST_CART_ITEM = "ADJUST_CART_ITEM";
export const EMPTY_CART = "EMPTY_CART";

export interface AddCartItemActionInterface {
  type: typeof ADD_CART_ITEM;
  payload: CartItem;
}

export interface AdjustCartItemActionInterface {
  type: typeof ADJUST_CART_ITEM;
  payload: {
    cartItemId: string;
    adjustedQuantity: number;
  };
}

export interface EmptyCartInterface {
  type: typeof EMPTY_CART;
}

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const addCartItem = (cartItem: CartItem): AddCartItemActionInterface => {
  return {
    type: ADD_CART_ITEM,
    payload: cartItem,
  };
};

export const adjustCartItem = (
  cartItemId: string,
  adjustedQuantity: number
) => {
  return {
    type: ADJUST_CART_ITEM,
    payload: {
      cartItemId,
      adjustedQuantity,
    },
  };
};
