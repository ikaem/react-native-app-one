import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";

import { AdminStackNavParams } from "../../navigation/navigation-types";
import { orders } from "../../data/fake-data";
import Colors from "../../constants/colors.constants";

import Center from "../../components/UI/center.component";
import OrderItem from "../../components/shop/order-item.component";
import OrderedProductItem from "../../components/shop/ordered-product-item.component";

interface OrderDetailedScreenProps {
  navigation: StackNavigationProp<AdminStackNavParams, "OrderDetailedScreen">;
  route: RouteProp<AdminStackNavParams, "OrderDetailedScreen">;
}

const OrderDetailedScreen: React.FC<OrderDetailedScreenProps> = ({
  navigation,
  route,
}) => {
  const { orderId } = route.params;

  const orderDetailed = orders.find((order) => order.orderId === orderId);

  if (!orderDetailed)
    return (
      <Center>
        <Text>Nepostojeća narudžba</Text>
      </Center>
    );

  return (
    <View style={styles.screen}>
      <View style={styles.orderSummary}>
        <View style={styles.orderInfo}>
          <Text>Kupac</Text>
          <Text>{orderDetailed.buyerId}</Text>
        </View>
        <View style={styles.orderInfo}>
          <Text>Datum</Text>
          <Text>{orderDetailed.formattedDate}</Text>
        </View>
        <View style={styles.orderCost}>
          <Text>Cijena</Text>
          <Text>{orderDetailed.orderTotal}</Text>
        </View>
        <View style={styles.orderCost}>
          <Text>Popusti</Text>
          <Text>{orderDetailed.orderDiscount}</Text>
        </View>
        <View style={styles.orderCost}>
          <Text>Ukupno</Text>
          <Text>{orderDetailed.orderTotal}</Text>
        </View>
        <View style={styles.orderAction}>
          <Button
            disabled={orderDetailed.isConfirmed}
            title="Potvrdi"
            onPress={() => console.log("Confirming...")}
          />
        </View>
      </View>
      <FlatList
        data={orderDetailed.orderItems}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => {
          return <OrderedProductItem item={item} />;
        }}
      />
    </View>
  );
};

export default OrderDetailedScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    backgroundColor: "white",
  },
  orderSummary: {
    width: 700,
    paddingBottom: 10,
    borderBottomColor: Colors.darkBlue,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  orderInfo: {},
  orderCost: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderAction: {
    marginTop: 10,
    width: 100,
    alignSelf: "flex-end",
  },
});
