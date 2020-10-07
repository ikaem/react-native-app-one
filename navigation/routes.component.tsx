import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppDrawerNavigator from "./navigators/app-drawer.navigator";
import LoginScreen from "../screens/auth/login.screen";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  const [tempIsUserLogged, setTempIsUserLogged] = useState(false);

  return (
    <NavigationContainer>
      {!tempIsUserLogged ? (
        <LoginScreen onLogin={() => setTempIsUserLogged(true)} />
      ) : (
        <AppDrawerNavigator />
      )}
    </NavigationContainer>
  );
};

export default Routes;
