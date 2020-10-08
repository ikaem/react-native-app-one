import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import OrderItem from "../../components/shop/order-item.component";

import Colors from "../../constants/colors.constants";
import {
  AdminStackNavParams,
  UserStackNavParams,
} from "../../navigation/navigation-types";
import { RootStateType } from "../../providers/app.providers";

interface OrdersOverviewScreenProps {
  navigation: StackNavigationProp<
    UserStackNavParams & AdminStackNavParams,
    "UserOrdersOverviewScreen" | "OrdersOverviewScreen"
  >;
  route: RouteProp<
    UserStackNavParams & AdminStackNavParams,
    "UserOrdersOverviewScreen" | "OrdersOverviewScreen"
  >;
}

const OrdersOverviewScreen: React.FC<OrdersOverviewScreenProps> = ({
  navigation,
  route,
}) => {
  const routeName = route.name;
  const navigateToOrder = (orderId: string) => {
    console.log("routeeeeeeeee", route);

    const toRoute =
      routeName === "UserOrdersOverviewScreen"
        ? "UserOrderDetailedScreen"
        : "OrderDetailedScreen";

    navigation.navigate(toRoute, {
      orderId,
    });
  };

  const [isCompletedOrders, setIsCompletedOrders] = useState(true);

  const orders = useSelector((state: RootStateType) => {
    if (routeName === "OrdersOverviewScreen") return state.orders.orders;

    return state.orders.orders.filter((order) => order.buyerId === "b2");
  });

  const filteredOrders = orders.filter(
    (order) => order.isConfirmed === isCompletedOrders
  );

  return (
    <View style={styles.screen}>
      <View style={styles.ordersSelectorContainer}>
        <TouchableOpacity
          containerStyle={{
            ...styles.ordersSelector,
            backgroundColor: isCompletedOrders
              ? Colors.darkGrey
              : Colors.darkBlue,
          }}
          onPress={() => setIsCompletedOrders(false)}
        >
          <Text
            style={{
              color: isCompletedOrders ? "black" : "white",
            }}
          >
            Nepotvrđene narudžbe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          containerStyle={{
            ...styles.ordersSelector,
            backgroundColor: isCompletedOrders
              ? Colors.darkBlue
              : Colors.darkGrey,
          }}
          onPress={() => setIsCompletedOrders(true)}
        >
          <Text
            style={{
              color: isCompletedOrders ? "white" : "black",
            }}
          >
            Potvrđene narudžbe
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={styles.orderItemsContainer}
          data={filteredOrders}
          keyExtractor={(order) => order.orderId}
          renderItem={({ item }) => {
            return (
              <OrderItem
                item={item}
                onNavigate={() => navigateToOrder(item.orderId)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default OrdersOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  ordersSelectorContainer: {
    width: 700,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  ordersSelector: {
    backgroundColor: "red",
    flex: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  orderItemsContainer: {
    width: 700,
  },

  orderItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 10,
  },
});
