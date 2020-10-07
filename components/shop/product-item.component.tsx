import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import Colors from "../../constants/colors.constants";
import Product from "../../models/product.model";

interface ProductItemProps {
  item: Product;
  submitOrder: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, submitOrder }) => {
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
          <TouchableOpacity style={styles.productQuantitAdjuster}>
            <Text>-</Text>
          </TouchableOpacity>
          <View style={styles.productQuantityInput}>
            <TextInput />
          </View>
          <TouchableOpacity style={styles.productQuantitAdjuster}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
          <Button
            title="Naruči"
            color={Colors.darkBlue}
            onPress={() => submitOrder()}
          />
        </View>
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
