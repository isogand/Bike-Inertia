import {useEffect} from "react";
import {Inertia} from "@inertiajs/inertia";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "@/Pages/Store/cart-slice";

export default (cart) => {
    const cartItemsRaw = useSelector((state) => state.cart.items);
    const cartItems = cartItemsRaw || [];
    // console.log(cartItems);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cartActions.setInitialValues(cart || []));
    }, []);

    const isCartChanged = () => {
        const cachedCart = localStorage.getItem("cartItems");
        const cartItemsString = JSON.stringify(cartItems);
        // console.log(cartItemsString, cachedCart);
        return cartItemsString !== cachedCart;
    };

    const runOnlyIfCartIsChanged = (run) => {
        const cartItemsString = JSON.stringify(cartItems);
        if (isCartChanged()) {
            run();
            localStorage.setItem("cartItems", cartItemsString);
        }
    };

    useEffect(() => {
        if (cartItemsRaw === null) return;
        runOnlyIfCartIsChanged(() => {
            Inertia.post(route("cart.store"), {
                items: cartItems.map((item) => {
                    return {
                        user_id: item.user_id,
                        quantity: item.quantity,
                        product_id: item.product_id,
                        price: item.price,
                    };
                }),
            });
        });
    }, [cartItemsRaw]);
};
