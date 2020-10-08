import CartItem from "../../models/cart-item.model";
import { orderedProductItem } from "../../models/order.model";

export const ADD_ORDER = "ADD_ORDER";

interface addOrderActionArgs {
  orderSubtotal: number;
  buyerId: string;
  orderProducts: orderedProductItem[];
}

export interface addOrderActionInterface {
  type: typeof ADD_ORDER;
  payload: {
    orderSubtotal: number;
    buyerId: string;
    orderProducts: orderedProductItem[];
    orderId: string;
  };
}

export const addOrder = (
  orderInfo: addOrderActionArgs
): addOrderActionInterface => {
  return {
    type: ADD_ORDER,
    payload: { ...orderInfo, orderId: new Date().toISOString() },
  };
};
