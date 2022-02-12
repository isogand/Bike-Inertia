import React, {useRef} from "react";
import "./Dashboard.css";
import "./app.js";
import BikeCart from "@/Pages/BikeCart";

function MouseEvent(props) {
    const babal = useRef({});

    let element = (
        <>
            <div id="top-articles-horizontal-cards-1">
                <div id="cards-container">
                    <div className="cards">
                        {props.bicycles.map((info) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <BikeCart
                                    babal={babal}
                                    onXChosen={(x, id) => {
                                        babal.current = {
                                            ...babal.current,
                                            [id]: x,
                                        };
                                    }}
                                    info={info}
                                    price={info.price}
                                    name={info.name}
                                    id={info.id}
                                    key={info.id}
                                />
                            );
                        })}
                    </div>
                </div>
                <div id="slide-left-container">
                    <div className="slide-left"></div>
                </div>
                <div id="slide-right-container">
                    <div className="slide-right"></div>
                </div>
            </div>
        </>
    );
    return element;
}

export default MouseEvent;
