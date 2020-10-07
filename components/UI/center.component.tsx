import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CenterProps {
  children: React.ReactNode;
}

const Center: React.FC = ({ children }) => {
  return <View style={styles.screen}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
