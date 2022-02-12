import React from "react";
import {useForm} from "@inertiajs/inertia-react";

const Checkout = () => {
    const {setData, data, post} = useForm({
        email: "",
        firstname: "",
        lastname: "",
        address: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        post(route("cart.store"));
    }
    return (
        <div
            className="-mb-9"
            style={{
                position: "relative",
                padding: "1.5rem",
                marginLeft: "25px",
                width: "1200px",
                overflow: "auto",
            }}
        >
            <div
                style={{
                    position: "relative",
                    padding: "1.5rem",
                    height: "700px",
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
                            fontSize: "30px",
                            paddingTop: "2rem",
                            position: "fixed",
                        }}
                    >
                        Check out
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "70px",
                            left: "400px",
                            width: "500px",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                fontFamily: "arial",
                                color: "black",
                                fontSize: "40px",
                                paddingTop: "2rem",
                            }}
                        >
                            Who is placing this order?
                        </div>
                        <div>
                            <div
                                style={{
                                    position: "absolute",
                                    fontFamily: "arial",
                                    color: "black",
                                    fontSize: "20px",
                                    paddingTop: "6rem",
                                }}
                            >
                                <input
                                    placeholder="Email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => {
                                        setData("email", e.target.value);
                                    }}
                                />
                                <div
                                    style={{
                                        border: "1px solid #ADADAD",
                                        width: "450px",
                                    }}
                                />
                                <br />
                                <div className="flex">
                                    <input
                                        placeholder="First Name"
                                        name="firstname"
                                        value={data.firstname}
                                        onChange={(e) => {
                                            setData(
                                                "firstname",
                                                e.target.value
                                            );
                                        }}
                                    />

                                    <input
                                        placeholder="First Name"
                                        name="lastname"
                                        value={data.lastname}
                                        onChange={(e) => {
                                            setData("lastname", e.target.value);
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        border: "1px solid #ADADAD",
                                        width: "450px",
                                    }}
                                />
                                <br />
                                <input
                                    placeholder="Address"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) => {
                                        setData("address", e.target.value);
                                    }}
                                />
                                <div
                                    style={{
                                        border: "1px solid #ADADAD",
                                        width: "450px",
                                    }}
                                />
                                <br />
                                <br />
                                <div
                                    style={{
                                        position: "absolute",
                                        fontFamily: "arial",
                                        color: "black",
                                        fontSize: "40px",
                                    }}
                                >
                                    Where would you like your order sent?
                                </div>
                                <br />
                                <div
                                    style={{
                                        position: "absolute",
                                        fontFamily: "arial",
                                        color: "black",
                                        fontSize: "20px",
                                        paddingTop: "6rem",
                                    }}
                                >
                                    <input
                                        placeholder="Address"
                                        name="address"
                                        value={data.address}
                                        onChange={(e) => {
                                            setData("address", e.target.value);
                                        }}
                                    />
                                    <div
                                        style={{
                                            border: "1px solid #ADADAD",
                                            width: "450px",
                                        }}
                                    />
                                    <br />
                                    <div className="flex">
                                        <input
                                            placeholder="Country"
                                            name="country"
                                            value={data.country}
                                            onChange={(e) => {
                                                setData(
                                                    "country",
                                                    e.target.value
                                                );
                                            }}
                                        />

                                        <input
                                            placeholder="City"
                                            name="city"
                                            value={data.city}
                                            onChange={(e) => {
                                                setData("city", e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: "1px solid #ADADAD",
                                            width: "450px",
                                        }}
                                    />
                                    <br />
                                    <div className="flex">
                                        <input
                                            placeholder="Phone"
                                            name="phone"
                                            value={data.phone}
                                            onChange={(e) => {
                                                setData(
                                                    "phone",
                                                    e.target.value
                                                );
                                            }}
                                        />

                                        <input
                                            placeholder="NatCode"
                                            name="natcode"
                                            value={data.natcode}
                                            onChange={(e) => {
                                                setData(
                                                    "natcode",
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: "1px solid #ADADAD",
                                            width: "450px",
                                        }}
                                    />
                                    <br />
                                    <input
                                        placeholder="Address"
                                        name="address"
                                        value={data.address}
                                        onChange={(e) => {
                                            setData("address", e.target.value);
                                        }}
                                    />
                                    <div
                                        style={{
                                            border: "1px solid #ADADAD",
                                            width: "450px",
                                        }}
                                    />
                                    <br />
                                    <br />
                                    <div
                                        style={{
                                            position: "absolute",
                                            fontFamily: "arial",
                                            color: "black",
                                            fontSize: "40px",
                                        }}
                                    >
                                        How Would You Like to Pay ?
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="form-check">
                                        <input
                                            className="form-check-input rounded-full"
                                            type="checkbox"
                                            value={data.option1}
                                            id="example"
                                        />
                                        <label
                                            className="form-check-label pl-3"
                                            htmlFor="example"
                                        >
                                            Pay whit credit Cart
                                        </label>
                                    </div>
                                    <br />
                                    <div className="form-check">
                                        <input
                                            className="form-check-input rounded-full"
                                            type="checkbox"
                                            value={data.option2}
                                            id="example"
                                        />
                                        <label
                                            className="form-check-label pl-3"
                                            htmlFor="example"
                                        >
                                            Pay whit PayPal
                                        </label>
                                    </div>
                                    <br />
                                    <div className="form-check">
                                        <input
                                            className="form-check-input rounded-full"
                                            type="checkbox"
                                            value={data.option3}
                                            id="example"
                                        />
                                        <label
                                            className="form-check-label pl-3"
                                            htmlFor="example"
                                        >
                                            Use giftCart
                                        </label>
                                    </div>
                                    <br />
                                    <input
                                        placeholder="Name of Cart"
                                        name="namecart"
                                        value={data.namecart}
                                        onChange={(e) => {
                                            setData("namecart", e.target.value);
                                        }}
                                    />
                                    <div
                                        style={{
                                            border: "1px solid #ADADAD",
                                            width: "450px",
                                        }}
                                    />
                                    <br />
                                    <input
                                        placeholder="Cart Number"
                                        name="cartnumber"
                                        value={data.cartnumber}
                                        onChange={(e) => {
                                            setData(
                                                "cartnumber",
                                                e.target.value
                                            );
                                        }}
                                    />
                                    <div
                                        style={{
                                            border: "1px solid #ADADAD",
                                            width: "450px",
                                        }}
                                    />
                                    <br />
                                    <div className="flex">
                                        <input
                                            placeholder="Date"
                                            name="date"
                                            value={data.date}
                                            onChange={(e) => {
                                                setData("date", e.target.value);
                                            }}
                                        />

                                        <input
                                            placeholder="CVV2"
                                            name="cvv2"
                                            value={data.cvv2}
                                            onChange={(e) => {
                                                setData("cvv2", e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: "1px solid #ADADAD",
                                            width: "450px",
                                        }}
                                    />
                                    <br />
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={data.option3}
                                            id="example"
                                        />
                                        <label
                                            className="form-check-label pl-3"
                                            htmlFor="example"
                                            style={{fontSize: "15px"}}
                                        >
                                            Use shipping address as billing
                                            address
                                        </label>
                                    </div>
                                    <br />
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={data.option3}
                                            id="example"
                                        />
                                        <label
                                            className="form-check-label pl-3"
                                            htmlFor="example"
                                            style={{fontSize: "15px"}}
                                        >
                                            I accept By Term & Condition
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
