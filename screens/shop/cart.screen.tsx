import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/colors.constants";
import { cartItems } from "../../data/fake-data";
import CartProductItem from "../../components/shop/cart-item.component";

const CartScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.cartSummary}>
        <View style={styles.cartSummarySection}>
          <Text>Broj artikala:</Text>
          <Text>{"11"}</Text>
        </View>
        <View style={styles.cartSummarySection}>
          <Text>Cijena:</Text>
          <Text>{"345.99"} kn</Text>
        </View>
        <View style={styles.cartAction}>
          <Button title="Naruči" onPress={() => console.log("Ordering...")} />
        </View>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.cartItemId}
        renderItem={({ item }) => {
          return <CartProductItem item={item} />;
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    backgroundColor: "white",
  },
  cartSummary: {
    width: 700,
    paddingBottom: 10,
    borderBottomColor: Colors.darkBlue,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  cartSummarySection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartAction: {
    marginTop: 10,
    width: 100,
    alignSelf: "flex-end",
  },
});
