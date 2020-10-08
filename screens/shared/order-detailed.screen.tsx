import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useReducer } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import {
  AdminStackNavParams,
  UserStackNavParams,
} from "../../navigation/navigation-types";
import Colors from "../../constants/colors.constants";
import { RootStateType } from "../../providers/app.providers";
import Order, { OrderInterface } from "../../models/order.model";

import Center from "../../components/UI/center.component";
import OrderedProductItem from "../../components/shop/ordered-product-item.component";
import { diff } from "react-native-reanimated";

interface OrderDetailedScreenProps {
  navigation: StackNavigationProp<
    UserStackNavParams & AdminStackNavParams,
    "UserOrderDetailedScreen" | "OrderDetailedScreen"
  >;
  route: RouteProp<
    UserStackNavParams & AdminStackNavParams,
    "UserOrderDetailedScreen" | "OrderDetailedScreen"
  >;
}

const SET_ORDER_DETAILED = "SET_ORDER_DETAILED";
const ADJUST_PRODUCT_DISCOUNT = "ADJUST_PRODUCT_DISCOUNT";

interface SetOrderDetailedActionInterface {
  type: typeof SET_ORDER_DETAILED;
  payload: OrderInterface;
}

interface AdjustProductDiscountActionInterface {
  type: typeof ADJUST_PRODUCT_DISCOUNT;
  payload: {
    adjustedProductDiscount: number;
    adjustedProductId: string;
  };
}

type OrderForConfirmActionTypes =
  | SetOrderDetailedActionInterface
  | AdjustProductDiscountActionInterface;

const setOrderDetailed = (
  orderDetailed: OrderInterface
): SetOrderDetailedActionInterface => {
  return {
    type: SET_ORDER_DETAILED,
    payload: orderDetailed,
  };
};

const adjustProductDiscount = (
  adjustedProductDiscount: number,
  adjustedProductId: string
): AdjustProductDiscountActionInterface => {
  return {
    type: ADJUST_PRODUCT_DISCOUNT,
    payload: {
      adjustedProductDiscount,
      adjustedProductId,
    },
  };
};

const initialOrderFormConfirmState: OrderInterface = {
  orderId: "",
  orderSubtotal: 0,
  orderDiscount: 0,
  orderTotal: 0,
  isConfirmed: false,
  buyerId: "",
  orderProducts: [],
  formattedDate: "",
};

const orderForConfirmReducer = (
  state: OrderInterface,
  action: OrderForConfirmActionTypes
) => {
  switch (action.type) {
    case SET_ORDER_DETAILED:
      return {
        ...action.payload,
      };

    case ADJUST_PRODUCT_DISCOUNT:
      const { adjustedProductDiscount, adjustedProductId } = action.payload;

      const oldProduct = state.orderProducts!.find(
        (product) => product.orderedProductItemId === adjustedProductId
      );

      if (!oldProduct) return state;

      const oldProductIndex = state.orderProducts!.findIndex(
        (product) => product.orderedProductItemId === adjustedProductId
      );

      const { orderedProductItemSubtotal } = oldProduct;

      const adjustedDiscountDecimal = adjustedProductDiscount / 100;

      const adjustedProductTotal =
        orderedProductItemSubtotal -
        adjustedDiscountDecimal * orderedProductItemSubtotal;

      const adjustedProduct = {
        ...oldProduct,
        orderedProductItemTotal: adjustedProductTotal,
        orderedProductItemDiscount: adjustedProductDiscount,
      };

      const adjustedOrderProducts = [...state.orderProducts!];
      adjustedOrderProducts[oldProductIndex] = adjustedProduct;

      const adjustedOrderDiscount = adjustedOrderProducts!.reduce(
        (acc, val) => {
          return (
            acc + (val.orderedProductItemSubtotal - val.orderedProductItemTotal)
          );
        },
        0
      );

      const adjustedOrderTotal = state.orderSubtotal - adjustedOrderDiscount;

      const newState = {
        ...state,
        orderDiscount: adjustedOrderDiscount,
        orderTotal: adjustedOrderTotal,
        orderProducts: adjustedOrderProducts,
      };

      return newState;

    default:
      return state;
  }
};

const OrderDetailedScreen: React.FC<OrderDetailedScreenProps> = ({
  navigation,
  route,
}) => {
  const [orderForConfirmState, dispatchOrderForConfirmState] = useReducer(
    orderForConfirmReducer,
    initialOrderFormConfirmState
  );

  const { orderId } = route.params;
  const isUserOrder = route.name === "UserOrderDetailedScreen";

  const orderDetailed = useSelector((state: RootStateType) =>
    state.orders.orders.find((order) => order.orderId === orderId)
  );

  useEffect(() => {
    if (!orderDetailed) return;
    dispatchOrderForConfirmState(setOrderDetailed(orderDetailed));
  }, [orderDetailed]);

  const dispatchNewDiscount = (
    orderedProductDiscount: number,
    orderedProductId: string
  ) => {
    dispatchOrderForConfirmState(
      adjustProductDiscount(orderedProductDiscount, orderedProductId)
    );
  };

  // create on submit confirmed order
  // grabe that simple state and send all data to reducer
  // reducer will do that math

  if (!orderForConfirmState.orderId)
    return (
      <Center>
        <Text>Nepostojeća narudžba</Text>
      </Center>
    );

  return (
    <View style={styles.screen}>
      <View style={styles.orderSummary}>
        <View style={styles.orderInfo}>
          <Text>Kupac</Text>
          <Text>{orderForConfirmState.buyerId}</Text>
        </View>
        <View style={styles.orderInfo}>
          <Text>Datum</Text>
          <Text>{orderForConfirmState.formattedDate}</Text>
        </View>
        <View style={styles.orderCost}>
          <Text>Cijena</Text>
          <Text>{orderForConfirmState.orderTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.orderCost}>
          <Text>Popusti</Text>
          <Text>{orderForConfirmState.orderDiscount.toFixed(2)}</Text>
        </View>
        <View style={styles.orderCost}>
          <Text>Ukupno</Text>
          <Text>{orderForConfirmState.orderTotal.toFixed(2)}</Text>
        </View>
      </View>
      <FlatList
        data={orderForConfirmState.orderProducts}
        keyExtractor={(orderedProduct) => orderedProduct.orderedProductItemId}
        renderItem={({ item }) => {
          return (
            <OrderedProductItem
              item={item}
              isUserOrder={isUserOrder}
              dispatchNewDiscount={dispatchNewDiscount}
            />
          );
        }}
      />
    </View>
  );
};

export default OrderDetailedScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    backgroundColor: "white",
  },
  orderSummary: {
    width: 700,
    paddingBottom: 10,
    borderBottomColor: Colors.darkBlue,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  orderInfo: {},
  orderCost: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderAction: {
    marginTop: 10,
    width: 100,
    alignSelf: "flex-end",
  },
});
