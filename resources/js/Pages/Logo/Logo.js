<div id="animation">
    <div className="bike">
        <div className="basket">
            <div className="basket-screw"></div>
        </div>
        <div className="basket-wire"></div>

        <div className="front wheel">
            <div className="rim">
                <div className="air"></div>
            </div>
            <div className="hub"></div>
            <div className="spokes">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div className="frame">
            <div></div>
            <div></div>
            <div></div>
            <div className="small"></div>
            <div></div>
            <div className="small"></div>
        </div>

        <div className="seat">
            <div className="support"></div>
            <div className="saddle"></div>
        </div>

        <div className="handlebars">
            <div className="handle">
                <div className="handle-hub"></div>
            </div>
        </div>

        <div className="pedals">
            <div className="gear">
                <div className="hub"></div>
                <div className="struts"></div>
            </div>
            <div className="front pedal">
                <div className="footpad"></div>
            </div>
            <div className="back pedal">
                <div className="footpad"></div>
            </div>
        </div>

        <div className="back wheel">
            <div className="rim">
                <div className="air"></div>
            </div>
            <div className="hub"></div>
            <div className="gear"></div>
            <div className="spokes">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="chain"></div>
    </div>
</div>;

// import React, {useEffect, useState, useRef} from "react";
// import {
//     useSpring,
//     animated,
//     useTransition,
//     useChain,
//     config,
//     useSpringRef,
// } from "react-spring";
// import BikeManager from "@/Pages/BikeManager";
// import "./app.js";
// import {cartActions} from "@/Pages/Store/cart-slice";
// import {useDispatch} from "react-redux";
//
// const vhToPixel = (value) => `${(window.innerHeight * value) / 100}`;
// const vwToPixel = (value) => `${(window.innerWidth * value) / 100}`;
//
// const BikeCart = ({babal, ...props}) => {
//     const dispatch = useDispatch();
//     const {name, price, id} = props;
//
//     const [page, setPage] = useState(0);
//     const [isSpinning, setIsSpinning] = useState(false);
//     const [mouse, setMouse] = useState(false);
//     const [open, set] = useState(false);
//     const [close, setClose] = useState(false);
//     const [selec, setSelec] = useState();
//     const [selec1, setSelec1] = useState();
//     const [selec2, setSelec2] = useState();
//
//     useEffect(() => {
//         $("#slide-right-container").click(function (e) {
//             setIsSpinning(true);
//         });
//         $("#slide-left-container").click(function (e) {
//             setIsSpinning(true);
//         });
//         $("#cards-container").click(function (e) {
//             setIsSpinning(false);
//         });
//     }, []);
//
//     const widgetWidth = 474;
//     const widgetHeight = 300;
//
//     const widgetWidth1 = 110;
//     const widgetHeight1 = 50;
//
//     const style = useSpring({
//         scale: mouse || open ? 1.3 : 1,
//         zIndex: mouse || open ? -1 : 0,
//         // position : open? relative : '',
//     });
//     const AnimationStyle = useSpring({
//         config: {mass: 1, tension: 10, friction: 10},
//         from: {translateX: 0, backgroundColor: " #FFFFFF"},
//         to: {
//             translateY: open ? -10 : 0,
//             // width: open? 400 : 50,
//             backgroundColor: open ? "#4e567d" : "",
//         },
//     });
//
//     const widgetAnimationStyle = useSpring({
//         config: {mass: 1, tension: 180, friction: 10},
//         from: {translateX: 0},
//         to: {
//             translateX: open ? -page * widgetWidth : 0,
//         },
//         // position : open? relative : '',
//     });
//
//     const springApi = useSpringRef();
//     const {size, ...rest} = useSpring({
//         ref: springApi,
//         config: {mass: 1, tension: 150, friction: 100, duration: 2500},
//         // config: {mass: 1, tension: 180, friction: 10},
//         from: {marginRight: "0%", marginLeftOfLeftBicycles: "0%"},
//         to: {
//             marginRight: open ? "70%" : "0%",
//             translateX: open
//                 ? -(
//                 (babal.current[open] % vwToPixel(100)) +
//                 Math.floor(babal.current[open] / vwToPixel(100)) * 50
//             ) + 100
//                 : 0,
//             width: open ? 1100 : 800,
//             height: 850,
//             padding: 100,
//         },
//     });
//
//     useEffect(() => {
//         // console.log("here",open,babal.current[open]);
//         // console.log("here",props.price);
//     }, [babal, open]);
//     const transApi = useSpringRef();
//     useChain(open ? [springApi, transApi] : [transApi, springApi], [
//         0.5,
//         open ? 0.03 : 0.6,
//     ]);
//
//     const springApi2 = useSpringRef();
//     const {size2, ...rest2} = useSpring({
//         ref: springApi2,
//         config: {mass: 1, tension: 150, friction: 50, duration: 2500},
//         from: {},
//         to: {
//             scale: open ? 1.5 : 1,
//             marginLeft: open ? -80 : 0,
//             // zIndex : open||mouse ? -1 : 0 ,
//         },
//     });
//     const transApi2 = useSpringRef();
//     useChain(open ? [springApi2, transApi2] : [transApi2, springApi2], [
//         1,
//         open ? 0.8 : 0.6,
//     ]);
//
//     const springApi3 = useSpringRef();
//     const {size3, ...rest3} = useSpring({
//         ref: springApi3,
//         config: {mass: 1, tension: 150, friction: 50, duration: 2500},
//         from: {},
//         to: {
//             scale: open ? 1.1 : 1,
//             marginTop: open ? -70 : 0,
//         },
//     });
//     const transApi3 = useSpringRef();
//     useChain(open ? [springApi3, transApi3] : [transApi3, springApi3], [
//         1,
//         open ? 0.8 : 0.6,
//     ]);
//
//     const springApi4 = useSpringRef();
//     const {size4, ...rest4} = useSpring({
//         ref: springApi3,
//         config: {mass: 1, tension: 250, friction: 50, duration: 850},
//         from: {},
//         to: {
//             scale: open ? 2 : 1,
//             opacity: open ? 1 : 0.75,
//         },
//     });
//     const transApi4 = useSpringRef();
//     useChain(open ? [springApi4, transApi4] : [transApi4, springApi4], [
//         1,
//         open ? 0.8 : 0.6,
//     ]);
//     const handleClick = () => {
//         set(() => false);
//     };
//     const handleClose = () => {
//         setClose(() => true);
//     };
//     const handleOpen = () => {
//         setClose(() => false);
//     };
//     const handleClickOption = (src) => {
//         setSelec(() => src);
//     };
//     const handleClickOption2 = (src) => {
//         setSelec1(() => src);
//     };
//     const handleClickOption3 = (src) => {
//         setSelec2(() => src);
//         // console.log(handleClickOption3);
//     };
//
//     const addToCartHandler = () => {
//         dispatch(
//             cartActions.addItemToCart({
//                 product_id: id,
//                 name,
//                 price,
//             })
//         );
//     };
//
//     return (
//         <>
//             {/*get it back here todo*/}
//             {open && (
//                 <div
//                     style={{
//                         position: "fixed",
//                         width: "100vw",
//                         height: "100vh",
//                         display: "flex",
//                         justifyContent: "flex-end",
//                         paddingRight: 86,
//                         marginTop: 300,
//                         marginLeft: -130,
//                     }}
//                 >
//                     <div>
//                         <div className="tex">Configure the Bike</div>
//
//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 marginTop: 75,
//                             }}
//                         >
//                             <button
//                                 onClick={setPage.bind(null, 0)}
//                                 className="circle"
//                             >
//                                 <svg
//                                     className="ml-4"
//                                     width="60"
//                                     height="60"
//                                     viewBox="0 0 60 60"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <circle
//                                         cx="30"
//                                         cy="30"
//                                         r="29"
//                                         stroke="black"
//                                         className=" hover:text-white"
//                                         strokeWidth="2"
//                                     />
//                                     <circle
//                                         cx="29.4643"
//                                         cy="29.4643"
//                                         r="23.1071"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <circle
//                                         cx="29.4643"
//                                         cy="29.4643"
//                                         r="9.17857"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <line
//                                         x1="29"
//                                         y1="19.2857"
//                                         x2="29"
//                                         y2="7.49999"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <line
//                                         x1="37.998"
//                                         y1="25.9665"
//                                         x2="48.7122"
//                                         y2="18.4665"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <line
//                                         x1="20.9497"
//                                         y1="26.5922"
//                                         x2="9.16401"
//                                         y2="20.1636"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <line
//                                         x1="36.0413"
//                                         y1="36.7707"
//                                         x2="45.5795"
//                                         y2="45.7189"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <line
//                                         x1="15.3484"
//                                         y1="46.2647"
//                                         x2="24.3838"
//                                         y2="36.8091"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                 </svg>
//                             </button>
//                             <button
//                                 onClick={setPage.bind(null, 1)}
//                                 className="circle1"
//                             >
//                                 <svg
//                                     className="ml-4"
//                                     width="60"
//                                     height="60"
//                                     viewBox="0 0 60 60"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <rect
//                                         x="1.21223"
//                                         y="0.652708"
//                                         width="46.8834"
//                                         height="16.9932"
//                                         rx="8.4966"
//                                         transform="matrix(0.949986 -0.312293 0.262246 0.965001 8.47001 15.6674)"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <rect
//                                         x="0.0900638"
//                                         y="-1.47657"
//                                         width="49.2399"
//                                         height="16.1758"
//                                         rx="8.08788"
//                                         transform="matrix(-0.626705 -0.779256 0.716769 -0.697311 39.8106 57.564)"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <rect
//                                         x="0.986503"
//                                         y="1.01608"
//                                         width="46.4696"
//                                         height="17.1293"
//                                         rx="8.56464"
//                                         transform="matrix(0.999869 0.0161683 -0.0133665 0.999911 0.269406 36.9681)"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <ellipse
//                                         cx="39.4241"
//                                         cy="46.9314"
//                                         rx="3.4786"
//                                         ry="3.82593"
//                                         fill="black"
//                                     />
//                                     <ellipse
//                                         cx="9.97199"
//                                         cy="46.9314"
//                                         rx="3.4786"
//                                         ry="3.82593"
//                                         fill="black"
//                                     />
//                                 </svg>
//                             </button>
//                             <button
//                                 onClick={setPage.bind(null, 2)}
//                                 className="circle2"
//                             >
//                                 <svg
//                                     className="ml-4"
//                                     width="60"
//                                     height="50"
//                                     viewBox="0 0 60 50"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <rect
//                                         x="1.16036"
//                                         y="0.678873"
//                                         width="4.06979"
//                                         height="22.554"
//                                         transform="matrix(0.95406 -0.299617 0.206296 0.97849 23.5388 26.3365)"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <line
//                                         x1="1"
//                                         y1="-1"
//                                         x2="6.04139"
//                                         y2="-1"
//                                         transform="matrix(-0.455806 0.890079 -0.964302 -0.264804 34.3239 18.2799)"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                     />
//                                     <line
//                                         x1="1"
//                                         y1="-1"
//                                         x2="11.4025"
//                                         y2="-1"
//                                         transform="matrix(-0.991988 0.126333 -0.231067 -0.972938 32.1842 24.1556)"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                     />
//                                     <line
//                                         x1="1"
//                                         y1="-1"
//                                         x2="5.95606"
//                                         y2="-1"
//                                         transform="matrix(-0.615197 -0.788373 0.922493 -0.386015 20.951 26.1141)"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                     />
//                                     <path
//                                         d="M59.5 13.7099C59.5 15.5298 57.7607 17.127 55.4532 17.127C53.1456 17.127 51.4064 15.5298 51.4064 13.7099C51.4064 11.89 53.1456 10.2928 55.4532 10.2928C57.7607 10.2928 59.5 11.89 59.5 13.7099Z"
//                                         fill="#C4C4C4"
//                                         stroke="black"
//                                     />
//                                     <path
//                                         d="M58.7939 13.8497L56.6327 15.0861L53.8024 16.1374H50.104H50.0586L50.0134 16.1415L33.8767 17.6104L33.8134 17.6162L33.7515 17.6299L18.9323 20.9054C9.72565 22.9403 0.999999 15.9327 0.999999 6.50386C0.999999 3.79568 3.49921 1.7784 6.14642 2.34984L39.1055 9.46458L39.2098 9.48709H39.3165H53.1782C55.8531 9.48709 58.1484 11.3109 58.7939 13.8497Z"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                 </svg>
//                             </button>
//                             <button
//                                 onClick={setPage.bind(null, 3)}
//                                 className="circle3"
//                             >
//                                 <svg
//                                     className="ml-3"
//                                     width="70"
//                                     height="50"
//                                     viewBox="0 0 70 50"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M33.2337 26.4386H37.2474V46.9931C37.2474 48.1015 36.3489 49 35.2405 49C34.1322 49 33.2337 48.1015 33.2337 46.9931V26.4386Z"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <path
//                                         d="M52.7515 4.21147L50.1252 5.35768L47.6685 7.22587L45.9843 9.34123L44.5026 11.5645"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <path
//                                         d="M24.4221 11.5682L22.8859 8.73816L20.8128 6.27933L18.7246 4.791L16.5979 3.56742"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <path
//                                         d="M25.055 11.5263H44.4639V16.4885C44.4639 21.8481 40.1191 26.193 34.7595 26.193C29.3998 26.193 25.055 21.8482 25.055 16.4885V11.5263Z"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <rect
//                                         x="53.6804"
//                                         y="1"
//                                         width="15.3196"
//                                         height="6.18713"
//                                         rx="3.09357"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                     <rect
//                                         x="1"
//                                         y="1"
//                                         width="15.3196"
//                                         height="6.18713"
//                                         rx="3.09357"
//                                         fill="white"
//                                         stroke="black"
//                                         strokeWidth="2"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//
//                         <div
//                             className="box"
//                             style={{
//                                 width: widgetWidth,
//                                 maxWidth: widgetWidth,
//                                 height: widgetHeight,
//                                 maxHeight: widgetHeight,
//                                 position: "relative",
//                                 overflow: "hidden",
//                                 marginRight: -20,
//                             }}
//                         >
//                             <div style={{position: "absolute", marginTop: 40}}>
//                                 <animated.div
//                                     style={{
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         translateX:
//                                         widgetAnimationStyle.translateX,
//                                         marginTop: 30,
//                                     }}
//                                 >
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         {[
//                                             "/images/11.png",
//                                             "/images/9.png",
//                                             "/images/8.png",
//                                             "/images/1.png",
//                                         ].map((src) => {
//                                             return (
//                                                 // eslint-disable-next-line react/jsx-key
//                                                 <button
//                                                     className="sogand"
//                                                     onClick={handleClickOption.bind(
//                                                         null,
//                                                         src
//                                                     )}
//                                                 >
//                                                     <img
//                                                         className="w1"
//                                                         src={src}
//                                                         alt="logo"
//                                                     />
//                                                 </button>
//                                             );
//                                         })}
//                                     </div>
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         <div
//                                             style={{
//                                                 width: 100,
//                                                 height: 150,
//
//                                                 borderRadius: 15,
//                                             }}
//                                         />
//                                         <div
//                                             style={{
//                                                 width: 100,
//                                                 height: 150,
//
//                                                 borderRadius: 15,
//                                             }}
//                                         />
//                                         <div
//                                             style={{
//                                                 width: 100,
//                                                 height: 150,
//
//                                                 borderRadius: 15,
//                                             }}
//                                         />
//                                         <div
//                                             style={{
//                                                 width: 100,
//                                                 height: 150,
//
//                                                 borderRadius: 15,
//                                             }}
//                                         />
//                                     </div>
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         {[
//                                             "/images/f1.png",
//                                             "/images/f2.png",
//                                             "/images/f3.png",
//                                             "/images/4.png",
//                                         ].map((src) => {
//                                             return (
//                                                 // eslint-disable-next-line react/jsx-key
//                                                 <button
//                                                     className="sogand"
//                                                     onClick={handleClickOption2.bind(
//                                                         null,
//                                                         src
//                                                     )}
//                                                 >
//                                                     <img
//                                                         style={{
//                                                             transform:
//                                                                 "scale(1.5)",
//                                                         }}
//                                                         src={src}
//                                                         alt="logo"
//                                                     />
//                                                 </button>
//                                             );
//                                         })}
//                                     </div>
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         {[
//                                             "/images/f6.png",
//                                             "/images/f55.png",
//                                             "/images/f555.png",
//                                             "/images/5.png",
//                                         ].map((src) => {
//                                             return (
//                                                 // eslint-disable-next-line react/jsx-key
//                                                 <button
//                                                     className="sogand"
//                                                     onClick={handleClickOption3.bind(
//                                                         null,
//                                                         src
//                                                     )}
//                                                 >
//                                                     <img
//                                                         style={{
//                                                             transform:
//                                                                 "scale(1.5)",
//                                                             marginLeft: "-40%",
//                                                             marginTop: "100%",
//                                                         }}
//                                                         src={src}
//                                                         alt="logo"
//                                                     />
//                                                 </button>
//                                             );
//                                         })}
//                                     </div>
//                                 </animated.div>
//                             </div>
//                         </div>
//                         {/*// * name * //*/}
//
//                         <div
//                             className="box"
//                             style={{
//                                 width: widgetWidth1,
//                                 maxWidth: widgetWidth1,
//                                 height: widgetHeight1,
//                                 maxHeight: widgetHeight1,
//                                 position: "relative",
//                                 overflow: "hidden",
//                                 marginTop: -270,
//                             }}
//                         >
//                             <div style={{position: "absolute"}}>
//                                 <animated.div
//                                     style={{
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         translateX:
//                                         widgetAnimationStyle.translateX,
//                                     }}
//                                 >
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         <div className="name">Wheels</div>
//                                     </div>
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         <div className="name">Body</div>
//                                     </div>
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         <div className="name">Chair</div>
//                                     </div>
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             width: widgetWidth,
//                                             justifyContent: "space-between",
//                                         }}
//                                     >
//                                         <div className="name">Pheromone</div>
//                                     </div>
//                                 </animated.div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             <button className={open ? "back1" : "divii"} onClick={handleClick}>
//                 <div className={open ? "svg" : "divii"}>
//                     <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 32 32"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="M10.6602 23.0465C10.8595 22.8886 10.9713 22.6749 10.9713 22.4523C10.9713 22.2296 10.8595 22.016 10.6602 21.8581L5.7398 17.9894H30.9303C31.214 17.9894 31.4861 17.9006 31.6867 17.7425C31.8873 17.5845 32 17.3701 32 17.1466C32 16.923 31.8873 16.7086 31.6867 16.5506C31.4861 16.3925 31.214 16.3037 30.9303 16.3037H5.77189L10.6602 12.4519C10.8631 12.2932 10.9776 12.0775 10.9786 11.8523C10.9796 11.627 10.867 11.4107 10.6656 11.2509C10.4642 11.091 10.1904 11.0008 9.90457 11C9.61871 10.9992 9.34417 11.0879 9.14133 11.2466L2.33828 16.6156C2.15865 16.7577 2.0578 16.9502 2.0578 17.1508C2.0578 17.3514 2.15865 17.5438 2.33828 17.686L9.14133 23.0465C9.24077 23.1255 9.35907 23.1882 9.48942 23.231C9.61977 23.2738 9.75958 23.2958 9.90079 23.2958C10.042 23.2958 10.1818 23.2738 10.3122 23.231C10.4425 23.1882 10.5608 23.1255 10.6602 23.0465Z"
//                             fill="black"
//                         />
//                     </svg>
//                 </div>
//                 <div className={open ? "Back" : "divii"} style={{zIndex: 10}}>
//                     Back
//                 </div>
//             </button>
//
//             <animated.div
//                 style={{...rest}}
//                 onClick={() => {
//                     set(props.info.id);
//                 }}
//             >
//                 {open && (
//                     <animated.div
//                         style={{...rest4}}
//                         className="bobo"
//                     ></animated.div>
//                 )}
//                 {/*{*/}
//                 {/*    open && (*/}
//                 <animated.div style={{...rest2}} className="bob"></animated.div>
//                 {/*    )*/}
//                 {/*}*/}
//
//                 <animated.div className="back">
//                     <animated.div className={open ? "back" : "divii"}>
//                         <animated.div
//                             // className='after'
//
//                             className={mouse || open ? "after" : "cards"}
//                             onMouseEnter={() => {
//                                 setMouse(true);
//                             }}
//                             onMouseLeave={() => {
//                                 setMouse(false);
//                             }}
//                             style={{
//                                 height: 800,
//                                 ...rest3,
//                             }}
//                         >
//                             <div className={mouse || open ? "divi" : "divii"}>
//                                 IF
//                             </div>
//                             <animated.div className="card">
//                                 <animated.div
//                                     className={open ? "carr" : "car"}
//                                     style={{
//                                         left: style.left,
//                                         transform: style.scale.to(
//                                             (s) => `scale(${s})`
//                                         ),
//                                     }}
//                                 >
//                                     <div>
//                                         <BikeManager
//                                             onXChosen={props.onXChosen}
//                                             close={close}
//                                             {...props}
//                                             id={props.info.id}
//                                             selec={selec}
//                                             selec1={selec1}
//                                             selec2={selec2}
//                                             isSpinning={isSpinning}
//                                         />
//                                     </div>
//                                 </animated.div>
//                             </animated.div>
//
//                             <button
//                                 className={open ? "select" : "divii"}
//                                 onClick={handleOpen}
//                             >
//                                 <div className={open ? "Bike" : "divii"}>
//                                     {open ? (
//                                         <img
//                                             className=" "
//                                             src={"/images/Group 9.svg"}
//                                             alt="logo"
//                                         />
//                                     ) : null}
//                                 </div>
//                             </button>
//                             <button
//                                 className={open ? "selecte" : "divii"}
//                                 onClick={handleClose}
//                             >
//                                 <div className={open ? "bike" : "divii"}>
//                                     {open ? (
//                                         <img
//                                             className="-mt-4 ml-1"
//                                             src={"/images/Group 10.svg"}
//                                             alt="logo"
//                                         />
//                                     ) : null}
//                                 </div>
//                             </button>
//
//                             <div className={mouse || open ? "Text" : "divii"}>
//                                 <div className={open ? "Text1" : ""}>
//                                     IF Mode
//                                 </div>
//                             </div>
//                             {open && (
//                                 <div className="absolute left-56 top-40 text-gray-400">
//                                     {props.info.name}
//                                 </div>
//                             )}
//                             {open && (
//                                 <button
//                                     className="btn1"
//                                     onClick={addToCartHandler}
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="30"
//                                         height="30"
//                                         fill="currentColor"
//                                         className="bi bi-plus-lg text-blue ml-3 "
//                                         viewBox="0 0 16 16"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
//                                         />
//                                     </svg>
//                                     <div className="addcart">Add To Cart</div>
//                                 </button>
//                             )}
//
//                             <button className={mouse ? "btn2" : "divii"}>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="30"
//                                     height="30"
//                                     fill="currentColor"
//                                     className="bi bi-plus-lg text-blue ml-5"
//                                     viewBox="0 0 16 16"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5 .5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
//                                     />
//                                 </svg>
//                             </button>
//
//                             <div className={mouse || open ? "Price" : "divii"}>
//                                 Price
//                             </div>
//                             <div className={mouse || open ? "Pric" : "divii"}>
//                                 ${props.info.price}
//                                 {/*${props.info.price.toFixed(2)}*/}
//                             </div>
//                         </animated.div>
//                     </animated.div>
//                 </animated.div>
//             </animated.div>
//         </>
//     );
// };
//
// export default BikeCart;
