import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import CartItem from "../../models/cart-item.model";

interface CartProductItemProps {
  item: CartItem;
}

const CartProductItem: React.FC<CartProductItemProps
> = ({ item }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.cartItemQuantity}>
        <Text style={{ minWidth: 30 }}>{item.cartItemQuantity}</Text>
        <Text style={{ minWidth: 30 }}> x </Text>
        <Text>{item.cartItemName}</Text>
      </View>

      <Text style={{ flex: 0.33, textAlign: "right" }}>
        {item.cartItemSubtotal.toString()} kn
      </Text>

      <TouchableOpacity>
        <Ionicons name="md-trash" size={23} color="tomato" />
      </TouchableOpacity>
    </View>
  );
};

export default CartProductItem;

const styles = StyleSheet.create({
  cartItem: {
    width: 700,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  cartItemQuantity: {
    flexDirection: "row",
    flex: 0.33,
  },
});
