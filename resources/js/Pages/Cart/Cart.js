import CartItem from "@/Pages/Cart/Index";
import {useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import "./Cart.css";
import useCartHandler from "@/Pages/Hook/useCartHandler";
import Summary from "@/Pages/Cart/Suumary";
import TextInput from "@/Shared/TextInput";
import Shopping from "@/Pages/Cart/Shopping";
import Checkout from "@/Pages/Cart/Checkout";
import {useSpringRef, animated} from "react-spring";
import {useTransition} from "@react-spring/web";
import Bycart from "@/Pages/Cart/Bycart";

const pages = [
    ({style}) => (
        <animated.div style={{...style}}>
            {" "}
            <Shopping />
        </animated.div>
    ),
    ({style}) => (
        <animated.div style={{...style}}>
            {" "}
            <Checkout />
        </animated.div>
    ),
    ({style}) => (
        <animated.div style={{...style}}>
            <Bycart />
        </animated.div>
    ),
];
const title = [
    ({style}) => <animated.div style={{...style}}> Summary</animated.div>,
    ({style}) => <animated.div style={{...style}}> Items</animated.div>,
    ({style}) => (
        <animated.div style={{...style}}>
            <div style={{fontSize: "30px"}}>Order Summary</div>
        </animated.div>
    ),
];
const page = [
    ({style}) => (
        <animated.div style={{...style}}>
            <div className="p-9 ml-6">
                <div className="flex-auto w-32 h-14 mt-14 p-23 text-black text-xl">
                    PromoCode:
                </div>
                <TextInput
                    className="absolute ml-36 -mt-14"
                    style={{
                        borderRadius: "5px",
                        border: "2px solid #000000",
                        width: "100px",
                    }}
                />
            </div>
        </animated.div>
    ),
    ({style}) => (
        <animated.div style={{...style}}>
            <div className="p-9 ml-6">
                <div className="flex-auto">
                    <div
                        style={{
                            border: "1px solid #393737",
                            width: "300px",
                        }}
                    />
                </div>
                <div className="flex-auto w-32 h-14 mt-14 p-23 text-black text-xl">
                    Total Price
                </div>
            </div>
        </animated.div>
    ),
    ({style}) => (
        <animated.div style={{...style}}>
            <div className="p-9 ml-6 ">
                <div
                    style={{
                        border: "1px solid #e3d7c0",
                        width: "50px",
                        margin: "70px",
                    }}
                />
            </div>
        </animated.div>
    ),
];

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart.items) || [];
    // console.log(props);
    useCartHandler(props.cart);

    const [index, set] = useState(0);
    const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
    const transRef = useSpringRef();
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: {opacity: 0, transform: "translate3d(100%,0,0)"},
        enter: {opacity: 1, transform: "translate3d(0%,0,0)"},
        leave: {opacity: 0, transform: "translate3d(-50%,0,0)"},
    });
    useEffect(() => {
        transRef.start();
    }, [index]);
    return (
        <>
            <div
                className="flex absolute"
                style={{
                    border: "3.5px solid #000000",
                    margin: "5rem",
                    borderRadius: "50px",
                }}
            >
                {transitions((style, i) => {
                    const Page = pages[i];
                    return <Page style={style} />;
                })}
                <div
                    className="flex-auto  bg-gray-700"
                    style={{
                        borderRadius: "0px 50px 50px 0px",
                        backgroundColor: "#e3d7c0",
                        width: "400px",
                    }}
                >
                    <img src={"/image/Bee.png"} alt="rocket" className="bee" />
                    <div
                        style={{
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "40px",
                            lineHeight: "64px",
                            color: " #000000",
                            position: "absolute",
                            padding: "3.5rem",
                            paddingTop: "7.5rem",
                        }}
                    >
                        {transitions((style, i) => {
                            const Page = title[i];
                            return <Page style={style} />;
                        })}
                    </div>
                    <div className=" -m-2 -pl-5 py-14 pt-56">
                        {cartItems.map((item) => {
                            // console.log("ssss", item);
                            return (
                                <Summary
                                    key={item.product_id}
                                    item={{
                                        id: item.product_id,
                                        name: item.name,
                                        quantity: item.quantity,
                                        total: item.totalPrice,
                                        price: item.price,
                                    }}
                                />
                            );
                        })}
                    </div>
                    {transitions((style, i) => {
                        const Page = page[i];
                        return <Page style={style} />;
                    })}
                    <button className="p-9 ml-6" onClick={onClick}>
                        <div
                            style={{
                                backgroundColor: "#393737",
                                color: "white",
                                fontSize: "40px",
                                paddingLeft: "40px",
                                paddingRight: "40px",
                            }}
                        >
                            Check Out
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
