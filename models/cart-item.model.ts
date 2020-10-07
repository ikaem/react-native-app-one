class CartItem {
  constructor(
    public cartItemId: string,
    public cartItemName: string,
    public cartItemPrice: number,
    public cartItemQuantity: number,
    public cartItemSubtotal: number,
    public cartItemImageUrl: string
  ) {}
}

export default CartItem;
