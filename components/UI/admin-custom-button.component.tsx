import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../../constants/colors.constants";

interface AdminCustomButtonProps {
  label: string;
  onNavigate: () => void;
}

const AdminCustomButton: React.FC<AdminCustomButtonProps> = ({
  label,
  onNavigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onNavigate()}
      style={styles.sectionSubtitleItem}
    >
      <View>
        <Text style={styles.sectionSubtitle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AdminCustomButton;

const styles = StyleSheet.create({
  sectionSubtitleItem: {
    backgroundColor: Colors.darkBlue,
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
