export type ShopStackNavParams = {
  HomeScreen: undefined;
  ProductsOverviewScreen: {
    productTypeId: string;
  };
  CartScreen: undefined;
};

export type AppDrawerNavParams = {
  ShopStack: undefined;
  UserStack: undefined;
  AdminStack: undefined;
};

export type AdminStackNavParams = {
  AdminHomeScreen: undefined;
  OrdersOverviewScreen: {
    // completed: boolean;
  };
  OrderDetailedScreen: {
    orderId: string;
  };
};

export type UserStackNavParams = {
  UserOrdersOverviewScreen: undefined;
  UserOrderDetailedScreen: {
    orderId: string;
  };
};
