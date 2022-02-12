import React, {useEffect, useState} from "react";
import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import "./Dashboard.css";
import MouseEvent from "@/Pages/MouseEvent";
import {Provider, useSelector} from "react-redux";
import store from "@/Pages/Store/Index";
import useCartHandler from "@/Pages/Hook/useCartHandler";

export default function Dashboard(props) {
    // console.log("this", props);

    const [isSpinning, setIsSpinning] = useState(false);
    const cart = useSelector((state) => state.cart.items) || [];
    useCartHandler(props.cart);
    useEffect(() => {
        if (cart === null) return;
    }, [cart]);

    return (
        <>
            <Authenticated auth={props.auth} errors={props.errors}>
                <Head title="Dashboard">
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js" />
                </Head>

                <header>
                    <Provider store={store}>
                        <MouseEvent bicycles={props.bicycles} />
                    </Provider>
                </header>
            </Authenticated>
        </>
    );
}
