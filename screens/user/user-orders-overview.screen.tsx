import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import OrderItem from "../../components/shop/order-item.component";

import Colors from "../../constants/colors.constants";
import { orders } from "../../data/fake-data";
import { UserStackNavParams } from "../../navigation/navigation-types";

interface UserOrdersOverviewScreenProps {
  navigation: StackNavigationProp<
    UserStackNavParams,
    "UserOrdersOverviewScreen"
  >;
  route: RouteProp<UserStackNavParams, "UserOrdersOverviewScreen">;
}

const UserOrdersOverviewScreen: React.FC<UserOrdersOverviewScreenProps> = ({
  navigation,
  route,
}) => {
  const [isCompletedOrders, setIsCompletedOrders] = useState(true);

  const myOrders = orders.filter((order) => order.buyerId === "b2");

  const myFilteredOrders = myOrders.filter(
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
          data={myFilteredOrders}
          keyExtractor={(order) => order.orderId}
          renderItem={({ item }) => {
            return (
              // <View style={styles.orderItem}>
              //   <Text>{item.formattedDate}</Text>
              // </View>
              <OrderItem
                item={item}
                onNavigate={() =>
                  navigation.navigate("UserOrderDetailedScreen", {
                    orderId: item.orderId,
                  })
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default UserOrdersOverviewScreen;

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
