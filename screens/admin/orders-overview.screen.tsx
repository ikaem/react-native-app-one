import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import OrderItem from "../../components/shop/order-item.component";
import Colors from "../../constants/colors.constants";

import { orders, products } from "../../data/fake-data";
import { AdminStackNavParams } from "../../navigation/navigation-types";

interface OrdersOverviewScreenProps {
  navigation: StackNavigationProp<AdminStackNavParams, "OrdersOverviewScreen">;
  route: RouteProp<AdminStackNavParams, "OrdersOverviewScreen">;
}

const OrdersOverviewScreen: React.FC<OrdersOverviewScreenProps> = ({
  navigation,
  route,
}) => {
  const { completed } = route.params;

  const filteredOrders = orders.filter(
    (order) => order.isConfirmed === completed
  );

  console.log(filteredOrders);

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.orderItemsContainer}
        data={filteredOrders}
        keyExtractor={(order) => order.orderId}
        renderItem={({ item }) => {
          return (
            <OrderItem
              item={item}
              onNavigate={() =>
                navigation.navigate("OrderDetailedScreen", {
                  orderId: item.orderId,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default OrdersOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 50,
  },
  orderItemsContainer: {
    width: 500,
  },
});
