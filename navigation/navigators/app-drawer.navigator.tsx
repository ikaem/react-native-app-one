import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { AppDrawerNavParams } from "../navigation-types";

import ShopStackNavigator from "./shop-stack.navigator";
import AdminStackNavigator from "./admin-stack.navigator";
import UserStackNavigator from "./user-stack.navigator";

const Drawer = createDrawerNavigator<AppDrawerNavParams>();

const AppDrawerNavigator = () => {
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView style={{ paddingTop: 50 }} {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Test" onPress={() => console.log("test")} /> */}
            <Button
              title="Log Admin"
              onPress={() => {
                setIsAdminLogged((prev) => !prev);
                console.log("Logging admin...");
              }}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="ShopStack" component={ShopStackNavigator} />
      <Drawer.Screen name="UserStack" component={UserStackNavigator} />
      {isAdminLogged && (
        <Drawer.Screen name="AdminStack" component={AdminStackNavigator} />
      )}
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;

const styles = StyleSheet.create({});
