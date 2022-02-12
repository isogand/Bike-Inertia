import {useDispatch} from "react-redux";
import {cartActions} from "@/Pages/Store/cart-slice";
import "./Index.css";
import React from "react";

const Summary = (props) => {
    const dispatch = useDispatch();
    const {name, quantity, total, price, id} = props.item;
    console.log(props.item);
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
        <>
            <div>
                <div
                    className="flex"
                    style={{
                        marginLeft: "4rem",
                        marginRight: "4rem",
                        display: "flex",
                    }}
                >
                    <div className="flex-auto w-96 h-14 text-black">{name}</div>
                    <div className="flex-auto w-32 h-14 -mr-4 text-black">
                        {/*${parseFloat(total).toFixed(2)}{" "}*/}
                        (${parseFloat(price).toFixed(2)}/item){/*{quantity}*/}
                    </div>
                    {/*<div className="flex-auto flex -mr-14 -mt-7">*/}
                    {/*    <button onClick={removeItemHandler}>*/}
                    {/*        <img*/}
                    {/*            src={"/image/minus.svg"}*/}
                    {/*            alt="rocket"*/}
                    {/*            className="flex-auto"*/}
                    {/*        />*/}
                    {/*    </button>*/}
                    {/*    <button onClick={addItemHandler}>*/}
                    {/*        <img*/}
                    {/*            src={"/image/plus.svg"}*/}
                    {/*            alt="rocket"*/}
                    {/*            className="flex-auto"*/}
                    {/*        />*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default Summary;
