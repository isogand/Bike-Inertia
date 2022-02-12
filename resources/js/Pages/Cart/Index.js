import "./Index.css";
import React, {useState} from "react";
import {useSpring, animated, useSpringRef, useChain} from "react-spring";

const CartItem = (props) => {
    const {
        name,
        description,
        id,
        photo_body,
        photo_leftWheel,
        photo_rightWheel,
        photo_chair,
        photo_saddle,
    } = props.item;
    console.log(props.item);
    const [state, setState] = useState(false);

    const springApi = useSpringRef();
    const {background, width, height, rotateZ, border} = useSpring({
        ref: springApi,
        config: {mass: 1, tension: 150, friction: 50, duration: 2500},
        from: {},
        to: {
            background: state ? "#e3d7c0" : "#ffffff",
            width: state ? 150 : 50,
            height: state ? 150 : 50,
            rotateZ: state ? 360 : 0,
        },
        loop: {reverse: true},
    });
    const transApi2 = useSpringRef();
    useChain(state ? [springApi, transApi2] : [transApi2, springApi], [
        1,
        state ? 0.8 : 0.6,
    ]);

    const AnimationStyle = useSpring({
        config: {mass: 1, tension: 5, friction: 10},
        from: {},
        to: {
            color: state ? "#000000" : "#FFFFFF",
            fontSize: state ? 20 : 0,
        },
    });

    return (
        <>
            <div className="py-5">
                <div
                    style={{
                        backgroundColor: "#e3d7c0",
                        borderRadius: "50%",
                        width: "450px",
                        height: "450px",
                        paddingTop: "2rem",
                    }}
                >
                    <img src={`/images/${photo_body}`} alt="logo" />
                    <img
                        src={`/images/${photo_leftWheel}`}
                        alt="logo"
                        className="wheel-left"
                    />
                    <img
                        src={`/images/${photo_rightWheel}`}
                        alt="logo"
                        className="wheel-right"
                    />
                    <img
                        src={`/images/${photo_chair}`}
                        alt="logo"
                        className="chair"
                    />
                    <img
                        src={`/images/${photo_saddle}`}
                        alt="logo"
                        className="saddle"
                    />
                </div>
            </div>

            <animated.div
                className={state ? "description" : "des_cription"}
                style={{
                    background,
                    width,
                    height,
                    borderRadius: 16,
                    rotateZ,
                    border,
                }}
                onClick={() => setState((open) => !open)}
            >
                {!state ? (
                    <img src={"/image/Description.svg"} alt="rocket" />
                ) : null}
                <animated.div
                    className="p-3"
                    style={{
                        color: AnimationStyle.color,
                        fontSize: AnimationStyle.fontSize,
                    }}
                >
                    {description}
                </animated.div>
            </animated.div>

            <div
                style={{
                    position: "absolute",
                    top: "400px",
                    width: "500px",
                    height: "170px",
                    left: "600px",
                    backgroundColor: "#e3d7c0",
                    boxShadow:
                        "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "50px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        fontFamily: "arial",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "20px",
                        lineHeight: "28px",
                        color: "#000000",
                        padding: "2rem",
                    }}
                >
                    SELECT SIZE:
                </div>
                <div
                    style={{
                        display: "flex",
                        marginTop: "60px",
                        padding: "0.5rem",
                        marginLeft: "20px",
                    }}
                >
                    <button className="size-bottom">XS</button>
                    <button className="size-bottom">S</button>
                    <button className="size-bottom">M</button>
                    <button className="size-bottom">L</button>
                    <button className="size-bottom">XL</button>
                </div>
            </div>
        </>
    );
};

export default CartItem;

// <div>
//     {/*<img src={`/images/${photo_leftWheel}`} alt="logo" />*/}
//     {/*<img src={`/images/${photo_rightWheel}`} alt="logo" />*/}
//     {/*<img src={`/images/${photo_chair}`} alt="logo" />*/}
//     {/*<img src={`/images/${photo_saddle}`} alt="logo" />*/}
//     {/*<div*/}
//     {/*    className="p-9"*/}
//     {/*    style={{*/}
//     {/*        margin: "1rem 0",*/}
//     {/*        backgroundColor: "#7881af",*/}
//     {/*        padding: "1rem",*/}
//     {/*        maxHeight: "40rem",*/}
//     {/*        borderRadius: "30px",*/}
//     {/*    }}*/}
//     {/*>*/}
//     {/*    <li*/}
//     {/*        className="p-5"*/}
//     {/*        style={{backgroundColor: "#394268", borderRadius: "20px"}}*/}
//     {/*    >*/}
//     {/*        <div>*/}
//     {/*            <h3*/}
//     {/*                style={{*/}
//     {/*                    margin: "0 0 0.5rem 0",*/}
//     {/*                    fontSize: "1rem",*/}
//     {/*                    color: "#ffffff",*/}
//     {/*                    marginBottom: "-20px",*/}
//     {/*                }}*/}
//     {/*            >*/}
//     {/*                {name}*/}
//     {/*            </h3>*/}
//     {/*            <div*/}
//     {/*                style={{*/}
//     {/*                    display: "flex",*/}
//     {/*                    justifyContent: "flex-end",*/}
//     {/*                }}*/}
//     {/*            >*/}
//     {/*                <button*/}
//     {/*                    style={{*/}
//     {/*                        color: "#ffffff",*/}
//     {/*                        backgroundColor: "red",*/}
//     {/*                        padding: "10px",*/}
//     {/*                        borderRadius: "10px",*/}
//     {/*                    }}*/}
//     {/*                >*/}
//     {/*                    Check out*/}
//     {/*                </button>*/}
//     {/*            </div>*/}
//     {/*            <div*/}
//     {/*                style={{*/}
//     {/*                    fontSize: "1.5rem",*/}
//     {/*                    fontWeight: "bold",*/}
//     {/*                    color: "#ffffff",*/}
//     {/*                }}*/}
//     {/*            >*/}
//     {/*                ${parseFloat(total).toFixed(2)}{" "}*/}
//     {/*                <span*/}
//     {/*                    style={{*/}
//     {/*                        fontWeight: "normal",*/}
//     {/*                        fontSize: "1rem",*/}
//     {/*                        fontStyle: "inherit",*/}
//     {/*                        display: "flex",*/}
//     {/*                        justifyContent: "flex-end",*/}
//     {/*                        margin: "0.25rem 0",*/}
//     {/*                    }}*/}
//     {/*                >*/}
//     {/*                    (${parseFloat(price).toFixed(2)}/item)*/}
//     {/*                </span>*/}
//     {/*            </div>*/}
//     {/*        </div>*/}
//     {/*        <div*/}
//     {/*            style={{*/}
//     {/*                display: "flex",*/}
//     {/*                justifyContent: "space-between",*/}
//     {/*                alignItems: "center",*/}
//     {/*                color: "#ffffff",*/}
//     {/*            }}*/}
//     {/*        >*/}
//     {/*            <div>*/}
//     {/*                x{" "}*/}
//     {/*                <span*/}
//     {/*                    style={{*/}
//     {/*                        fontSize: "1.5rem",*/}
//     {/*                        fontWeight: "bold",*/}
//     {/*                    }}*/}
//     {/*                >*/}
//     {/*                    {quantity}*/}
//     {/*                </span>*/}
//     {/*            </div>*/}
//     {/*            <div*/}
//     {/*                className="actions"*/}
//     {/*                style={{*/}
//     {/*                    display: "flex",*/}
//     {/*                    justifyContent: "flex-end",*/}
//     {/*                    margin: "0.5rem 0",*/}
//     {/*                }}*/}
//     {/*            >*/}
//     {/*                <button onClick={removeItemHandler}>-</button>*/}
//     {/*                <button onClick={addItemHandler}>+</button>*/}
//     {/*            </div>*/}
//     {/*        </div>*/}
//     {/*    </li>*/}
//     {/*</div>*/}
// </div>
