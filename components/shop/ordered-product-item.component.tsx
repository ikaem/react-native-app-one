import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Colors from "../../constants/colors.constants";
import { cartItems } from "../../data/fake-data";
import CartItem from "../../models/cart-item.model";
import { orderedProductItem } from "../../models/order.model";

interface OrderedProductItemProps {
  item: orderedProductItem;
  isUserOrder?: boolean;
  dispatchNewDiscount: (
    orderedProductDiscount: number,
    orderedProductId: string
  ) => void;
}

const OrderedProductItem: React.FC<OrderedProductItemProps> = ({
  item,
  isUserOrder,
  dispatchNewDiscount,
}) => {

  // console.log("from product item", item)

  const [orderedProductDiscount, setOrderedProductDiscount] = useState("0");

  const adjustProductDiscount = (text: string) => {
    const adjustedDiscount = Number(text);
    if (isNaN(adjustedDiscount)) return;
    if (adjustedDiscount < 0) return;
    if (adjustedDiscount > 100) return;
    setOrderedProductDiscount(text);
  };

  useEffect(() => {

    dispatchNewDiscount(
      Number(orderedProductDiscount),
      item.orderedProductItemId
    );
  }, [orderedProductDiscount]);

  return (
    <View style={styles.orderItem}>
      <Image
        style={styles.orderedProductImage}
        source={{
          uri: item.orderedProductItemImageUrl,
        }}
      />
      <View style={styles.orderedProductInfo}>
        <Text style={styles.orderedProductTitle}>
          {item.orderedProductItemName}
        </Text>
        <Text>Cijena po komadu: {item.orderedProductItemPrice.toFixed(2)}</Text>
        <Text>Komada: {item.orderedProductItemQuantity}</Text>
      </View>

      {!isUserOrder && (
        <View style={styles.orderedProductDiscount}>
          <Text>Popust</Text>
          <TextInput
            value={orderedProductDiscount}
            onChangeText={(text) => adjustProductDiscount(text)}
            style={styles.orderedProdcutDiscountInput}
          />

          <TouchableOpacity
            style={styles.orderedProductDiscountAction}
            onPress={() => {}}
          >
            <Text style={{ color: "white" }}>Odobri</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.orderedProductCost}>
        <Text style={styles.orderedProductCostAmount}>
          Cijena: <Text>{item.orderedProductItemSubtotal.toFixed(2)} kn</Text>
        </Text>
        <Text style={styles.orderedProductCostAmount}>
          Odobren popust: <Text>{item.orderedProductItemDiscount}%</Text>
        </Text>

        <Text style={styles.orderedProductCostAmount}>
          Ukupna cijena: <Text>{item.orderedProductItemTotal.toFixed(2)} kn</Text>
        </Text>
      </View>
    </View>
  );
};

export default OrderedProductItem;

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: "row",
    width: 700,
    height: 120,
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: Colors.lightGrey,
    padding: 10,
  },
  orderedProductInfo: {
    flex: 1,
    marginHorizontal: 5,
  },

  orderedProductImage: {
    flex: 1,
    marginRight: 5,
  },
  orderedProductTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  orderedProductDiscount: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  orderedProdcutDiscountInput: {
    textAlign: "center",
    backgroundColor: "white",
  },
  orderedProductDiscountAction: {
    backgroundColor: Colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  orderedProductCost: {
    flex: 1,
    marginLeft: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  orderedProductCostAmount: {
    textAlign: "right",
  },
});
