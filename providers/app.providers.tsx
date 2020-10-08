import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Routes from "../navigation/routes.component";
import productsReducer from "../store/reducers/products.reducer";
import cartReducer from "../store/reducers/cart.reducer";
import ordersReducer from "../store/reducers/orders.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
const store = createStore(rootReducer);

const AppProviders: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export type RootStateType = ReturnType<typeof rootReducer>;

export default AppProviders;
