import dayjs from "dayjs";

class Order {
  constructor(
    public orderId: string,
    private orderDate: Date,
    public orderItems: string[], // will be array of cart items
    public orderSubtotal: number,
    public orderDiscount: number,
    public orderTotal: number,
    public isConfirmed: boolean,
    public buyerId: string
  ) {}

  get formattedDate() {
    let customDate: string;

    return dayjs(this.orderDate).locale("hr-hr").format('DD.MM.YYYY. HH:mm');
  }
}

export default Order;
