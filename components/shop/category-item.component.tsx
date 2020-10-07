import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { productTypes } from "../../data/fake-data";
import Colors from "../../constants/colors.constants";

interface CategoryItemProps {
  categoryId: string;
  categoryName: string;
  navigateToProductTypes: (productTypeId: string) => void;
}

export default function CategoryItem({
  categoryId,
  categoryName,
  navigateToProductTypes,
}: CategoryItemProps): React.ReactElement {
  const categoryProductTypes = productTypes.filter((type) =>
    type.categories.includes(categoryId)
  );

  return (
    <View style={styles.categoryContainer} key={categoryId}>
      <Text style={styles.categoryName}>{categoryName}</Text>
      <View style={styles.productTypesContainer}>
        {categoryProductTypes.map((filteredType) => (
          <TouchableOpacity
            key={filteredType.productTypeId}
            onPress={() => navigateToProductTypes(filteredType.productTypeId)}
          >
            <View style={styles.productTypeContainer}>
              <Text>{filteredType.productTypeName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    margin: 10,
    width: "100%",
  },
  categoryName: {
    fontSize: 24,
  },
  productTypesContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    paddingVertical: 10,
  },
  productTypeContainer: {
    backgroundColor: Colors.lightGrey,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
