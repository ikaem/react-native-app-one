import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { ShopStackNavParams } from "../navigation-types";

import HomeScreen from "../../screens/shop/home.screen";
import ProductsOverviewScreen from "../../screens/shop/products-overview.component";
import CartScreen from "../../screens/shop/cart.screen";
import HeaderIconButton from "../../components/UI/header-icon-button.component";

const Stack = createStackNavigator<ShopStackNavParams>();

const ShopStackNavigator: React.FC = () => {
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
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
                {canGoBack && <HeaderBackButton onPress={navigation.goBack} />}
                <Item
                  iconName="md-cart"
                  title="Košarica"
                  onPress={() => {
                    navigation.navigate("CartScreen");
                  }}
                />
              </HeaderButtons>
            );
          },
        };
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProductsOverviewScreen"
        component={ProductsOverviewScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;
