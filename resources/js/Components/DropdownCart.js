import React from "react";
import Dropdown from "@/Components/Dropdown";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "@/Pages/Store/cart-slice";

const DropdownCart = (props) => {
    const dispatch = useDispatch();
    const {name, quantity, price, id} = props.item;
    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    const addItemHandler = () => {
        dispatch(
            cartActions.addItemToCart({
                product_id: id,
                name,
                price,
            })
        );
    };

    return (
        <div>
            <div>
                <div
                    style={{
                        backgroundColor: "#f8c7ce",
                        padding: "1rem",
                        maxHeight: "40rem",
                        color: "gray",
                        boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
                        borderRadius: "20px",
                        margin: "1rem",
                    }}
                >
                    <div>
                        <h3
                            style={{
                                margin: "0 0 0.5rem 0",
                                fontSize: "1.25rem",
                                color: "white",
                                marginBottom: "-30px",
                            }}
                        >
                            {props.item?.name}
                        </h3>
                        <div
                            style={{
                                marginTop: "-5px",
                                justifyContent: "flex-end",
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                            }}
                        >
                            <div>
                                x{" "}
                                <span
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    {quantity}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            // margin: "0.5rem 0",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                margin: "0.5rem 0",
                                paddingRight: "25px",
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    border: "1px solid white",
                                    marginLeft: " 0.5rem",
                                    padding: "0.15rem 1rem",
                                    borderRadius: "15px",
                                    color: "white",
                                }}
                                className="p-1"
                                onClick={removeItemHandler}
                            >
                                -
                            </button>
                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    border: "1px solid white",
                                    marginLeft: " 0.5rem",
                                    padding: "0.15rem 1rem",
                                    color: "white",
                                    borderRadius: "15px",
                                }}
                                className="p-1"
                                onClick={addItemHandler}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DropdownCart;
