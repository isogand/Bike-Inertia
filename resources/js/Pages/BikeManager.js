import Bike from "@/Pages/Bike/Bike";
import Bike2 from "@/Pages/Bike/Bike2";
import Bike3 from "@/Pages/Bike/Bike3";
import Bike4 from "@/Pages/Bike/Bike4";
import Bike5 from "@/Pages/Bike/Bike5";
import Bike6 from "@/Pages/Bike/Bike6";
import Bike7 from "@/Pages/Bike/Bike7";
import Bike8 from "@/Pages/Bike/Bike8";
import Bike9 from "@/Pages/Bike/Bike9";
import Bike10 from "@/Pages/Bike/Bike10";
import Bike11 from "@/Pages/Bike/Bike11";
import React, {useEffect, useRef} from "react";

const BikeManager = ({id, price, name, onXChosen, ...rest}) => {
    const hello = () => {
        switch (id) {
            case 1:
                return <Bike {...rest} />;
            case 2:
                return <Bike2 {...rest} />;
            case 3:
                return <Bike3 {...rest} />;
            case 4:
                return <Bike4 {...rest} />;
            case 5:
                return <Bike5 {...rest} />;
            case 6:
                return <Bike6 {...rest} />;
            case 7:
                return <Bike7 {...rest} />;
            case 8:
                return <Bike8 {...rest} />;
            case 9:
                return <Bike9 {...rest} />;
            case 10:
                return <Bike10 {...rest} />;
            case 11:
                return <Bike11 {...rest} />;
            default:
                return null;
        }
    };
    const boob = useRef();
    function set() {
        onXChosen(boob.current.getBoundingClientRect().x, id);
    }
    useEffect(() => {
        // console.log(id,boob.current.getBoundingClientRect())
        set();
        window.addEventListener("resize", set);
        return () => window.removeEventListener("resize", set);
    }, []);

    return <div ref={boob}>{hello()}</div>;
};

export default BikeManager;
