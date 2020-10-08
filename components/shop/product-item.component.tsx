import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { or } from "react-native-reanimated";

import Colors from "../../constants/colors.constants";
import Product from "../../models/product.model";

interface ProductItemProps {
  item: Product;
  onSetProduct: (
    productId: string,
    productQuantity: number,
    productName: string,
    productPrice: number,
    productImageUrl: string
  ) => void;
  submitOrder: () => void;
  currentOrderingProduct: string;
  currentOrderQuantity: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  item,
  onSetProduct,
  submitOrder,
  currentOrderingProduct,
  currentOrderQuantity,
}) => {
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    if (currentOrderingProduct !== item.productId) setProductQuantity(0);
  }, [currentOrderingProduct]);

  const onAdjustQuantity = (isIncrease: boolean) => {
    let newQuantity = isIncrease ? productQuantity + 1 : productQuantity - 1;

    if (newQuantity < 0) return;

    setProductQuantity(newQuantity);

    onSetProduct(
      item.productId,
      newQuantity,
      item.productTitle,
      item.productPrice,
      item.productImageUrl
    );
  };

  const onChangeQuantity = (text: string) => {
    let newQuantity = parseInt(text);
    if (isNaN(newQuantity)) return;
    if (newQuantity < 0) return;

    setProductQuantity(newQuantity);

    onSetProduct(
      item.productId,
      newQuantity,
      item.productTitle,
      item.productPrice,
      item.productImageUrl
    );
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.productItem}>
        <Image
          source={{
            uri: item.productImageUrl,
          }}
          style={styles.productImage}
        />

        <Text>{item.productTitle}</Text>
        <Text>{item.productPrice}</Text>

        <View style={styles.productQuantityContainer}>
          <TouchableOpacity
            style={styles.productQuantitAdjuster}
            onPress={() => onAdjustQuantity(false)}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View style={styles.productQuantityInput}>
            <TextInput
              style={{ textAlign: "center" }}
              value={productQuantity.toString()}
              onChangeText={(text) => onChangeQuantity(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.productQuantitAdjuster}
            onPress={() => onAdjustQuantity(true)}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
          <Button
            title="Naruči"
            color={Colors.darkBlue}
            onPress={() => {
              if(!productQuantity) return;
              if(productQuantity < 1) return;
              if(isNaN(productQuantity)) return
              submitOrder()}}
          />
        </View>

        <Text>{currentOrderQuantity.toString()}</Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "transparent",
    width: "20%",
  },
  productItem: {
    margin: 20,
    backgroundColor: Colors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 100,
  },
  productQuantityContainer: {
    flexDirection: "row",
    backgroundColor: Colors.darkGrey,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
  },
  productQuantitAdjuster: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  productQuantityInput: {
    backgroundColor: "white",
    flex: 0.5,
  },
  actionsContainer: {
    marginTop: 10,
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
});
