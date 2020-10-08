import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useReducer, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { ShopStackNavParams } from "../../navigation/navigation-types";
// import { products } from "../../data/fake-data";
import { RootStateType } from "../../providers/app.providers";
import CartItem from "../../models/cart-item.model";
import * as cartActions from "../../store/actions/cart.actions";

import ProductItem from "../../components/shop/product-item.component";
import Center from "../../components/UI/center.component";

interface ProductsOverviewScreenProps {
  navigation: StackNavigationProp<ShopStackNavParams, "ProductsOverviewScreen">;
  route: RouteProp<ShopStackNavParams, "ProductsOverviewScreen">;
}

const ADJUST_CURRENT_PRODUCT = "ADJUST_CURRENT_PRODUCT";
const RESET_CURRENT_PRODUCT = "RESET_CURRENT_PRODUCT";

interface ProductItemForOrderInterface {
  productId: string;
  productQuantity: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
}

interface AdjustCurentProductActionInterface {
  type: typeof ADJUST_CURRENT_PRODUCT;
  payload: ProductItemForOrderInterface;
}

interface ResetCurentProductActionInterface {
  type: typeof RESET_CURRENT_PRODUCT;
}

type ProductItemForOrderActionTypes =
  | AdjustCurentProductActionInterface
  | ResetCurentProductActionInterface;

const adjustCurrentProduct = (
  currentProduct: ProductItemForOrderInterface
): AdjustCurentProductActionInterface => {
  return {
    type: "ADJUST_CURRENT_PRODUCT",
    payload: {
      productId: currentProduct.productId,
      productQuantity: currentProduct.productQuantity,
      productName: currentProduct.productName,
      productPrice: currentProduct.productPrice,
      productImageUrl: currentProduct.productImageUrl,
    },
  };
};

const resetCurrentProduct = (): ResetCurentProductActionInterface => {
  return {
    type: RESET_CURRENT_PRODUCT,
  };
};

const initialProductForOrderState = {
  productId: "",
  productName: "",
  productPrice: 0,
  productQuantity: 0,
  productSubtotal: 0,
  productImageUrl: "",
};

const productItemForOrderReducer = (
  state = initialProductForOrderState,
  action: ProductItemForOrderActionTypes
) => {
  switch (action.type) {
    case "ADJUST_CURRENT_PRODUCT":
      const {
        productId,
        productName,
        productPrice,
        productQuantity,
        productImageUrl,
      } = action.payload;

      const newProductItemForOrder = {
        productId,
        productName,
        productPrice,
        productQuantity,
        productSubtotal: productQuantity * productPrice,
        productImageUrl,
      };

      console.log("new product for order", newProductItemForOrder);

      return newProductItemForOrder;

    case RESET_CURRENT_PRODUCT:
      return initialProductForOrderState;

    default:
      return state;
  }
};

const ProductsOverviewScreen: React.FC<ProductsOverviewScreenProps> = ({
  navigation,
  route,
}) => {
  const { productTypeId } = route.params;
  const [productForOrderState, dispatchProductForOrderState] = useReducer(
    productItemForOrderReducer,
    initialProductForOrderState
  );
  const dispatch = useDispatch();

  const products = useSelector((state: RootStateType) =>
    state.products.availableProducts.filter((product) =>
      product.productType.includes(productTypeId)
    )
  );

  const onSetProduct = (
    productId: string,
    productQuantity: number,
    productName: string,
    productPrice: number,
    productImageUrl: string
  ) => {
    dispatchProductForOrderState(
      adjustCurrentProduct({
        productId,
        productQuantity: productQuantity,
        productName: productName,
        productPrice: productPrice,
        productImageUrl: productImageUrl,
      })
    );
  };

  const submitOrder = () => {
    const newCartItem = new CartItem(
      new Date().toISOString(),
      productForOrderState.productName,
      productForOrderState.productPrice,
      productForOrderState.productQuantity,
      productForOrderState.productSubtotal,
      productForOrderState.productImageUrl
    );
    dispatch(cartActions.addCartItem(newCartItem));
    dispatchProductForOrderState(resetCurrentProduct());
  };

  if (!products)
    return (
      <Center>
        <Text>Trenutačno nemamo ovih proizvoda</Text>
      </Center>
    );

  return (
    <View style={styles.screen}>
      <View style={styles.productsContainer}>
        <FlatList
          numColumns={5}
          keyExtractor={(product) => product.productId}
          data={products}
          renderItem={({ item }) => {
            return (
              <ProductItem
                item={item}
                submitOrder={submitOrder}
                currentOrderingProduct={productForOrderState.productId}
                currentOrderQuantity={productForOrderState.productQuantity}
                onSetProduct={onSetProduct}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  productsContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});
