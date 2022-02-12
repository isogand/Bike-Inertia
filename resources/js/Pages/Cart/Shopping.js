import React from "react";
import {useSelector} from "react-redux";
import useCartHandler from "@/Pages/Hook/useCartHandler";
import CartItem from "@/Pages/Cart/Index";

const Shopping = (props) => {
    const cartItems = useSelector((state) => state.cart.items) || [];
    useCartHandler(props.cart);
    return (
        <div
            className="flex-auto -mb-9"
            style={{
                position: "relative",
                padding: "1.5rem",
                marginLeft: "25px",
                width: "1200px",
            }}
        >
            <div
                style={{
                    position: "relative",
                    padding: "1.5rem",
                }}
            >
                <div
                    style={{
                        padding: "2.5rem",
                    }}
                >
                    <a
                        href={route("dashboard")}
                        style={{
                            color: "black",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                fontSize: "15px",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    left: "10px",
                                }}
                            >
                                BACK TO STORE
                            </div>
                            <div
                                // className="pr-1"
                                style={{
                                    position: "absolute",
                                    left: "-15px",
                                    top: "2px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-chevron-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </a>
                    <div
                        style={{
                            fontFamily: "arial",
                            color: "black",
                            fontSize: "40px",
                            paddingTop: "2rem",
                        }}
                    >
                        Your Shopping Cart
                    </div>
                </div>

                <ul>
                    {cartItems.map((item) => {
                        console.log("ssss", item);
                        return (
                            <CartItem
                                key={item.product_id}
                                item={{
                                    id: item.product_id,
                                    description: item.description,
                                    photo_body: item.photo_body,
                                    photo_leftWheel: item.photo_leftWheel,
                                    photo_rightWheel: item.photo_rightWheel,
                                    photo_chair: item.photo_chair,
                                    photo_saddle: item.photo_saddle,
                                }}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Shopping;
