import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AdminHomeScreen from "../../screens/admin/admin-home.screen";
import OrderDetailedScreen from "../../screens/admin/order-detailed.screen";
import OrdersOverviewScreen from "../../screens/admin/orders-overview.screen";
import HeaderIconButton from "../../components/UI/header-icon-button.component";

import { AdminStackNavParams } from "../navigation-types";

const Stack = createStackNavigator<AdminStackNavParams>();

const AdminStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerTitleAlign: "center",
          headerLeft: ({ canGoBack }) => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item
                  iconName="md-menu"
                  title="Izbornik"
                  onPress={navigation.toggleDrawer}
                />
                {canGoBack && <HeaderBackButton onPress={navigation.goBack} />}
                {/* <Item
                  iconName="md-cart"
                  title="Košarica"
                  onPress={() => {
                    console.log("to cart screen");
                  }}
                /> */}
              </HeaderButtons>
            );
          },
        };
      }}
    >
      <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
      <Stack.Screen
        name="OrdersOverviewScreen"
        component={OrdersOverviewScreen}
        options={({ navigation, route }) => {
          return {
            headerTitle: route.params.completed
              ? "Potvrđene narudžbe"
              : "Nepotvrđene nardudžbe",
          };
        }}
      />
      <Stack.Screen
        name="OrderDetailedScreen"
        component={OrderDetailedScreen}
      />
    </Stack.Navigator>
  );
};

export default AdminStackNavigator;

const styles = StyleSheet.create({});
