import dayjs from "dayjs";
import CartItem from "./cart-item.model";

export interface orderedProductItem {
  orderedProductItemId: string,
  orderedProductItemName: string,
  orderedProductItemPrice: number,
  orderedProductItemQuantity: number,
  orderedProductItemSubtotal: number,
  orderedProductItemDiscount: number,
  orderedProductItemTotal: number,
  orderedProductItemImageUrl: string
}

export interface OrderInterface {
    orderId: string,
    orderSubtotal: number,
    orderDiscount: number,
    orderTotal: number,
    isConfirmed: boolean,
    buyerId: string,
    orderProducts?: orderedProductItem[]
    formattedDate: string;
}

class Order implements OrderInterface {
  constructor(
    public orderId: string,
    private orderDate: Date,
    public orderSubtotal: number,
    public orderDiscount: number,
    public orderTotal: number,
    public isConfirmed: boolean,
    public buyerId: string,
    public orderProducts?: orderedProductItem[]
  ) {}

  get formattedDate() {

    return dayjs(this.orderDate).locale("hr-hr").format('DD.MM.YYYY. HH:mm');
  }
}

export default Order;
