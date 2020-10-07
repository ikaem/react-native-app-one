import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../constants/colors.constants";
import { AdminStackNavParams } from "../../navigation/navigation-types";

import AdminCustomButton from "../../components/UI/admin-custom-button.component";

interface AdminHomeScreenProps {
  navigation: StackNavigationProp<AdminStackNavParams, "AdminHomeScreen">;
  route: RouteProp<AdminStackNavParams, "AdminHomeScreen">;
}

const AdminHomeScreen: React.FC<AdminHomeScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Narudžbe</Text>
        <View style={styles.section}>
          <AdminCustomButton
            onNavigate={() =>
              navigation.navigate("OrdersOverviewScreen", {
                completed: false,
              })
            }
            label="Nepotvrđene narudžbe"
          />

          <AdminCustomButton
            label="Potvrđene narudžbe"
            onNavigate={() =>
              navigation.navigate("OrdersOverviewScreen", {
                completed: true,
              })
            }
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Uredi</Text>
        <View>
          <TouchableOpacity
            style={styles.sectionSubtitleItem}
          >
            <View>
              <Text style={styles.sectionSubtitle}>Proizvode</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.sectionSubtitle}>Vrste proizvoda</Text>
          <Text style={styles.sectionSubtitle}>Kategorije</Text>
        </View>

        <Text style={styles.sectionTitle}>Dodaj</Text>
        <View>
          <Text style={styles.sectionSubtitle}>Proizvod</Text>
          <Text style={styles.sectionSubtitle}>Vrstu proizvoda</Text>
          <Text style={styles.sectionSubtitle}>Kategoriju</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AdminHomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  section: {
    width: "50%",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  sectionSubtitleItem: {
    backgroundColor: Colors.darkBlue,
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
