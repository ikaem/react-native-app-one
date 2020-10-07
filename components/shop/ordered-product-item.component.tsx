import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Colors from "../../constants/colors.constants";

interface OrderedProductItemProps {
  item: string; // for now, waiting on model for cart item
  isUserOrder?: boolean;
}

const OrderedProductItem: React.FC<OrderedProductItemProps> = ({
  item,
  isUserOrder,
}) => {
  return (
    <View style={styles.orderItem}>
      <Image
        style={styles.orderedProductImage}
        source={{
          uri: "https://source.unsplash.com/200x200/?nature,water",
        }}
      />
      <View style={styles.orderedProductInfo}>
        <Text style={styles.orderedProductTitle}>{item}</Text>
        <Text>Cijena</Text>
        <Text>Količina</Text>
      </View>

      {!isUserOrder && (
        <View style={styles.orderedProductDiscount}>
          <Text>Popust</Text>
          <TextInput style={styles.orderedProdcutDiscountInput} />

          <TouchableOpacity
            style={styles.orderedProductDiscountAction}
            onPress={() => {}}
          >
            <Text style={{ color: "white" }}>Odobri</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.orderedProductCost}>
        <Text style={styles.orderedProductCostAmount}>
          Ukupna cijena: <Text>{"1111"} kn</Text>
        </Text>
        <Text style={styles.orderedProductCostAmount}>
          Odobreni popusti: <Text>{"11"}%</Text>
        </Text>
      </View>
    </View>
  );
};

export default OrderedProductItem;

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: "row",
    width: 700,
    height: 120,
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: Colors.lightGrey,
    padding: 10,
  },
  orderedProductInfo: {
    flex: 1,
    marginHorizontal: 5,
  },

  orderedProductImage: {
    flex: 1,
    marginRight: 5,
  },
  orderedProductTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  orderedProductDiscount: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  orderedProdcutDiscountInput: {
    textAlign: "center",
    backgroundColor: "white",
  },
  orderedProductDiscountAction: {
    backgroundColor: Colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  orderedProductCost: {
    flex: 1,
    marginLeft: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  orderedProductCostAmount: {
    textAlign: "right",
  },
});
