import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import CategoryItem from "../../components/shop/category-item.component";

// testing
import { categories, productTypes } from "../../data/fake-data";
import { ShopStackNavParams } from "../../navigation/navigation-types";
import { RouteProp } from "@react-navigation/native";

interface HomeScreenProps {
  navigation: StackNavigationProp<ShopStackNavParams, "HomeScreen">;
  route: RouteProp<ShopStackNavParams, "HomeScreen">;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const navigateToProductTypes = (productTypeId: string) => {
    navigation.navigate("ProductsOverviewScreen", {
      productTypeId,
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.categoriesContainer}>
        {categories.map(({ categoryId, categoryName }) => (
          <CategoryItem
            key={categoryId}
            categoryId={categoryId}
            categoryName={categoryName}
            navigateToProductTypes={navigateToProductTypes}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  categoriesContainer: {},
  headerLeftContainer: {
    flexDirection: "row",
  },
  headerLeftItem: {
    color: "white",
    marginHorizontal: 10,
  },
  headerRightContainer: {
    flexDirection: "row",
  },
  headerRightItem: {
    color: "white",
    marginHorizontal: 10,
  },
});
