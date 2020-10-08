import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { UserStackNavParams } from "../navigation-types";

import OrdersOverviewScreen from "../../screens/shared/orders-overview.screen";
import OrderDetailedScreen from "../../screens/shared/order-detailed.screen";
import HeaderIconButton from "../../components/UI/header-icon-button.component";

const Stack = createStackNavigator<UserStackNavParams>();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerTitleAlign: "center",
          headerLeft: ({ canGoBack }) => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item
                  title="Izbornik"
                  iconName="md-menu"
                  onPress={navigation.toggleDrawer}
                />
                {canGoBack && <HeaderBackButton onPress={navigation.goBack} />}
              </HeaderButtons>
            );
          },
        };
      }}
    >
      <Stack.Screen
        name="UserOrdersOverviewScreen"
        component={OrdersOverviewScreen}
      />
      <Stack.Screen
        name="UserOrderDetailedScreen"
        component={OrderDetailedScreen}
      />
    </Stack.Navigator>
  );
};

export default UserStackNavigator;

const styles = StyleSheet.create({});
