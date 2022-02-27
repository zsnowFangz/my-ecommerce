import { configureStore } from "@reduxjs/toolkit";

import ProductModalSlice from "./product-modal/ProductModalSlice";
import cartItemsSlice from "./shopping-cart/cartItemSlice";

export const store = configureStore({
  reducer: {
    productModal: ProductModalSlice,
    cartItems: cartItemsSlice,
  },
});
