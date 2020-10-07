import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/colors.constants";

// no typing of props since not using them
const HeaderIconButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.darkBlue}
    />
  );
};

export default HeaderIconButton;

const styles = StyleSheet.create({});
