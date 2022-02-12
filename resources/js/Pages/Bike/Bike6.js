import React, {useEffect, useState} from "react";
import "./Bike.css";
import {useSpring, animated, useSpringRef} from "react-spring";
import "animate.css";

const Bike6 = (props) => {
    const className = props.isSpinning ? "wheel1" : "wheel";
    const classNam = props.isSpinning ? "wheel2" : "whee";
    const className1 = props.isSpinning ? "chair" : " ";
    const classNa = props.isSpinning ? "farman" : "";
    const [active, setActive] = useState(
        `/images/${props.info.photo_rightWheel}`
    );
    const [select, setSelect] = useState(active);
    const [active1, setActive1] = useState(`/images/${props.info.photo_chair}`);
    const [select1, setSelect1] = useState(active1);
    const [active2, setActive2] = useState(
        `/images/${props.info.photo_saddle}`
    );
    const [select2, setSelect2] = useState(active2);

    const widgetAnimationStyle = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: 22, translateY: -3},
        to: {
            translateX: props.close ? 0 : 22,
            translateY: props.close ? -20 : -3,
        },
    });
    const widgetAnimationStyle1 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: 235, translateY: -165, opacity: 1},
        to: {
            translateX: props.close ? 100 : 235,
            translateY: props.close ? -150 : -165,
        },
    });
    const widgetAnimationStyle2 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {
            translateX: 10,
            rotate: "-70.03deg",
            translateY: -300,
            opacity: 1,
        },
        to: {
            translateX: props.close ? 100 : 10,
            translateY: props.close ? -300 : -300,
            rotate: props.close ? "-70.03deg" : "0",
            // opacity: animation ? '0' : '1',
        },
    });
    const widgetAnimationStyle3 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: 5, rotate: "-71.52deg", translateY: -570},
        to: {
            translateX: props.close ? 570 : 5,
            translateY: props.close ? -170 : -570,
            rotate: props.close ? "-71.52deg" : "0",
        },
    });
    const widgetAnimationStyle4 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: -5, rotate: "-67.52deg", translateY: -880},
        to: {
            translateX: props.close ? 825 : -5,
            translateY: props.close ? -310 : -880,
            rotate: props.close ? "-67.52deg" : "0",
        },
    });

    // Wheel left & right
    const s = useSpring(() => ({
        config: {mass: 1, tension: 80, friction: 150, duration: 2500},
        from: {opacity: 1},
    }));
    useEffect(async () => {
        if (props.selec) {
            setSelect(props.selec);
        }
    }, [props.selec]);
    useEffect(async () => {
        if (props.selec) {
            if (select !== active) {
                await s[1].start({opacity: 0});
                setActive(select);
                await s[1].start({opacity: 1});
            }
        }
    }, [select, active, props.selec]);

    // saddle
    const f = useSpring(() => ({
        config: {mass: 1, tension: 80, friction: 150, duration: 2500},
        from: {opacity: 1},
    }));
    useEffect(async () => {
        if (props.selec1) {
            setSelect1(props.selec1);
        }
    }, [props.selec1]);
    useEffect(async () => {
        if (select1 !== active1) {
            await f[1].start({opacity: 0});
            setActive1(select1);
            await f[1].start({opacity: 1});
        }
    }, [select1, active1]);

    // saddle
    const d = useSpring(() => ({
        config: {mass: 1, tension: 80, friction: 150, duration: 2500},
        from: {opacity: 1},
    }));
    useEffect(async () => {
        if (props.selec2) {
            setSelect2(props.selec2);
        }
    }, [props.selec2]);
    useEffect(async () => {
        if (select2 !== active2) {
            await d[1].start({opacity: 0});
            setActive2(select2);
            await d[1].start({opacity: 1});
        }
    }, [select2, active2]);

    return (
        <>
            <animated.div className="class">
                <animated.img
                    style={{
                        rotate: widgetAnimationStyle2.rotate,
                        translateX: widgetAnimationStyle.translateX,
                        translateY: widgetAnimationStyle.translateY,
                    }}
                    src={`/images/${props.info.photo_body}`}
                    alt="logo"
                />

                <animated.img
                    style={{
                        translateX: widgetAnimationStyle1.translateX,
                        translateY: widgetAnimationStyle1.translateY,
                        width: 140,
                        height: 140,
                        opacity: s[0].opacity,
                    }}
                    className={className}
                    src={active}
                    alt="logo"
                />
                <animated.img
                    style={{
                        translateX: widgetAnimationStyle2.translateX,
                        translateY: widgetAnimationStyle2.translateY,
                        width: 140,
                        height: 140,
                        opacity: s[0].opacity,
                    }}
                    className={classNam}
                    src={active}
                    alt="logo"
                />

                <animated.img
                    style={{
                        rotate: widgetAnimationStyle3.rotate,
                        width: 500,
                        height: 310,
                        translateX: widgetAnimationStyle3.translateX,
                        translateY: widgetAnimationStyle3.translateY,
                        opacity: f[0].opacity,
                    }}
                    className={className1}
                    src={active1}
                    alt="logo"
                />
                <animated.img
                    style={{
                        rotate: widgetAnimationStyle2.rotate,
                        width: 500,
                        height: 310.2,
                        translateX: widgetAnimationStyle4.translateX,
                        translateY: widgetAnimationStyle4.translateY,
                        opacity: d[0].opacity,
                    }}
                    className={classNa}
                    src={active2}
                    alt="logo"
                />
            </animated.div>
        </>
    );
};
export default Bike6;

// animate__backOutLeft
// animate__backOutRight
