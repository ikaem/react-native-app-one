import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/colors.constants";
import CartProductItem from "../../components/shop/cart-product-item.component";
import { RootStateType } from "../../providers/app.providers";
import * as orderActions from "../../store/actions/orders.actions";
import * as cartActions from "../../store/actions/cart.actions";
import { orderedProductItem } from "../../models/order.model";

const CartScreen = () => {
  const cart = useSelector((state: RootStateType) => state.cart);

  const dispatch = useDispatch();

  const submitOrder = () => {
    const orderProducts = cart.cartItems.map((cartItem) => {
      const orderedProduct: orderedProductItem = {
        orderedProductItemId: cartItem.cartItemId,
        orderedProductItemName: cartItem.cartItemName,
        orderedProductItemPrice: cartItem.cartItemPrice,
        orderedProductItemQuantity: cartItem.cartItemQuantity,
        orderedProductItemSubtotal: cartItem.cartItemSubtotal,
        orderedProductItemDiscount: 0,
        orderedProductItemTotal: cartItem.cartItemSubtotal,
        orderedProductItemImageUrl: cartItem.cartItemImageUrl,
      };
      return orderedProduct;
    });

    const orderInfo = {
      buyerId: "b2",
      orderProducts: orderProducts,
      orderSubtotal: cart.subtotal,
    };

    dispatch(orderActions.addOrder(orderInfo));
    dispatch(cartActions.emptyCart());
  };

  return (
    <View style={styles.screen}>
      <View style={styles.cartSummary}>
        <View style={styles.cartSummarySection}>
          <Text>Broj artikala:</Text>
          <Text>{cart.cartItems.length}</Text>
        </View>
        <View style={styles.cartSummarySection}>
          <Text>Cijena:</Text>
          <Text>{cart.subtotal.toFixed(2)} kn</Text>
        </View>
        <View style={styles.cartAction}>
          <Button title="Naruči" onPress={submitOrder} />
        </View>
      </View>

      <FlatList
        data={cart.cartItems}
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
