import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import CartItem from "../../models/cart-item.model";
import Colors from "../../constants/colors.constants";
import * as cartActions from "../../store/actions/cart.actions";

interface CartProductItemProps {
  item: CartItem;
}

const CartProductItem: React.FC<CartProductItemProps> = ({ item }) => {
  const [productQuantity, setProductQuantity] = useState(item.cartItemQuantity);
  const dispatch = useDispatch();

  const adjustStateQuantity = (text: string) => {
    const adjustedQuantity = Number(text);
    if (isNaN(adjustedQuantity)) return;
    if (adjustedQuantity < 0) return;
    setProductQuantity(adjustedQuantity);
  };

  const updateProductItemQuantity = () => {
    if (isNaN(productQuantity)) return;

    dispatch(cartActions.adjustCartItem(item.cartItemId, productQuantity));
  };

  return (
    <View style={styles.cartItem}>
      <View style={styles.cartItemQuantity}>
        <Text style={{ minWidth: 30 }}>{item.cartItemQuantity}</Text>
        <Text style={{ minWidth: 30 }}> x </Text>
        <Text>{item.cartItemName}</Text>
      </View>

      <Text style={{ flex: 0.33, textAlign: "right" }}>
        {/* {item.cartItemSubtotal.toFixed(2)} kn */}
      </Text>

      <View style={styles.cartItemQuantityForm}>
        <Text>Podesi količinu</Text>
        <TextInput
          style={styles.cartItemQuantityInput}
          value={productQuantity.toString()}
          onChangeText={(text) => adjustStateQuantity(text)}
        />
      </View>

      <TouchableOpacity onPress={updateProductItemQuantity}>
        <Ionicons name="md-checkmark" size={23} color="purple" />
      </TouchableOpacity>

      {/* <TouchableOpacity>
        <Ionicons name="md-trash" size={23} color="tomato" />
      </TouchableOpacity> */}
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

  cartItemQuantityForm: {
    flexDirection: "row",
    alignContent: "center",
  },

  cartItemQuantityInput: {
    backgroundColor: Colors.lightGrey,
    color: "black",
    paddingHorizontal: 5,
    marginLeft: 15,
    borderRadius: 5,
    width: 50,
    textAlign: "center",
  },
});
