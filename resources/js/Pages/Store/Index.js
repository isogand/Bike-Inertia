import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "@/Pages/Store/cart-slice";

import uiSlice from "@/Pages/Store/ui-slice";
import commentSlice from "@/Pages/Store/comment-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        cart: cartSlice,
        // uicart: uiCart,
        comment: commentSlice,
    },
});

export default store;
