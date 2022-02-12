import React from "react";
import "./Bycart.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Bycart = () => {
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
                    <div
                        style={{
                            fontFamily: "arial",
                            color: "black",
                            fontSize: "40px",
                            paddingTop: "2rem",
                        }}
                    >
                        Thank you for shopping with Byredo.
                        <br />
                        <div
                            style={{
                                fontFamily: "arial",
                                color: "black",
                                fontSize: "30px",
                                paddingTop: "2rem",
                            }}
                        >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            You've made a great choice
                        </div>
                        <div
                            className="text-gray-400"
                            style={{
                                fontFamily: "arial",
                                fontSize: "20px",
                                paddingTop: "2rem",
                            }}
                        >
                            Confrmation letter has been sent to{" "}
                            isogandtat@gmail.com
                        </div>
                    </div>
                    <a className="ml-72" href={route("dashboard")}>
                        <button className="p-7 mt-44 ml-44">
                            <div
                                style={{
                                    backgroundColor: "#393737",
                                    color: "white",
                                    fontSize: "40px",
                                    paddingLeft: "40px",
                                    paddingRight: "40px",
                                }}
                            >
                                back to store
                            </div>
                        </button>
                    </a>
                </div>
            </div>
            <div style={{marginTop: "-180px"}}>
                <div className="middlee">
                    <a className="btnn" href="#">
                        <i className=" bi-github text-gray-700 " />
                    </a>
                    <a className="btnn" href="#">
                        <i className=" bi-twitter text-blue-500 " />
                    </a>
                    <a className="btnn" href="#">
                        <i className=" bi-google text-red-600" />
                    </a>
                    <a className="btnn" href="#">
                        <i className=" bi-instagram text-pink-700" />
                    </a>
                    <a className="btnn" href="#">
                        <i className=" bi-youtube text-red-700" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Bycart;
