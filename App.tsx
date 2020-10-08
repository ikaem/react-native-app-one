import React from "react";
import { enableScreens } from "react-native-screens";
import AppProviders from "./providers/app.providers";

enableScreens();

export default function App() {
  return <AppProviders />;
}
