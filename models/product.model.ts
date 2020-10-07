class Product {
  constructor(
    public productId: string,
    public productType: string[],
    public productCategory: string[],
    public productTitle: string,
    public productPrice: number,
    public productDescription: string,
    public productImageUrl: string
  ) {}
}

export default Product;
