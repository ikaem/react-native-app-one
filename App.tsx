import React from "react";
import { Text } from "react-native";
import { enableScreens } from "react-native-screens";
import Routes from "./navigation/routes.component";

enableScreens();

export default function App() {
  return <Routes />;
}
