import { products } from "../../data/fake-data";
import Product from "../../models/product.model";

interface ProductsStateInterface {
  availableProducts: Product[];
}

const initialState: ProductsStateInterface = {
  availableProducts: products,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
