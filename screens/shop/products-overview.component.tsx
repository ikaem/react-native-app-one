import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TextInput,
  Button,
} from "react-native";

import { ShopStackNavParams } from "../../navigation/navigation-types";
import { products } from "../../data/fake-data";

import ProductItem from "../../components/shop/product-item.component";

interface ProductsOverviewScreenProps {
  navigation: StackNavigationProp<ShopStackNavParams, "ProductsOverviewScreen">;
  route: RouteProp<ShopStackNavParams, "ProductsOverviewScreen">;
}

const ProductsOverviewScreen: React.FC<ProductsOverviewScreenProps> = ({
  navigation,
  route,
}) => {
  const { productTypeId } = route.params;
  const filteredProducts = products.filter((product) =>
    product.productType.includes(productTypeId)
  );

  const submitOrder = () => {
    console.log("Ordering...");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.productsContainer}>
        <FlatList
          numColumns={5}
          keyExtractor={(product) => product.productId}
          data={products}
          renderItem={({ item }) => {
            return <ProductItem item={item} submitOrder={submitOrder} />;
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
