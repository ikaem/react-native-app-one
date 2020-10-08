import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/colors.constants";

import Order from "../../models/order.model";

interface OrderItemProps {
  item: Order;
  onNavigate?: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ item, onNavigate }) => {
  return (
    <TouchableOpacity onPress={onNavigate}>
      <View style={styles.orderItem}>
        <View>
          <Text style={styles.orderItemHeader}>Kupac</Text>
          <Text>{item.buyerId}</Text>
        </View>
        <View>
          <Text style={styles.orderItemHeader}>Datum</Text>
          <Text>{item.formattedDate}</Text>
        </View>
        <View>
          <Text style={styles.orderItemHeader}>Ukupno</Text>
          <Text
            style={{
              color: item.isConfirmed ? "black" : "red",
              fontWeight: item.isConfirmed ? "400" : "bold",
            }}
          >
            {item.orderTotal.toFixed(2)} kn
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    // margin: 10,
    marginVertical: 10,
    backgroundColor: Colors.lightGrey,
  },
  orderItemHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
