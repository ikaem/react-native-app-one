import Order from "../../models/order.model";
// import { orders } from "../../data/fake-data";
import {
  addOrder,
  ADD_ORDER,
  addOrderActionInterface,
} from "../actions/orders.actions";

interface OrdersStateInterface {
  orders: Order[];
}

export type OrderStateActionsType = addOrderActionInterface;

const initialState: OrdersStateInterface = {
  orders: [],
};

export default (
  state: OrdersStateInterface = initialState,
  action: OrderStateActionsType
) => {
  switch (action.type) {
    case ADD_ORDER:
      const { orderSubtotal, buyerId, orderProducts, orderId } = action.payload;

      const newOrder = new Order(
        orderId,
        new Date(),
        orderSubtotal,
        0,
        orderSubtotal,
        false,
        buyerId,
        orderProducts.sort((a, b) =>
          a.orderedProductItemId > b.orderedProductItemId ? 1 : -1
        )
      );

      const newOrders = [...state.orders, newOrder].sort((a, b) =>
        a.orderId > b.orderId ? 1 : -1
      );

      return {
        ...state,
        orders: newOrders,
      };

    default:
      return state;
  }
};
