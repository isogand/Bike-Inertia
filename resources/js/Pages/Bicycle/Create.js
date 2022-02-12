import React from "react";
import {useForm} from "@inertiajs/inertia-react";
import "./Create.css";

const Create = () => {
    const {setData, data, post} = useForm({
        price: "",
        name: "",
        description: "",
        photo_leftWheel: null,
        photo_rightWheel: null,
        photo_chair: null,
        photo_body: null,
        photo_saddle: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("bicycle.store"));
    }
    return (
        <>
            <div className="p-16 ">
                <div className="m-9 rounded-3xl   shadow-2xl w-25 ">
                    <h1
                        style={{
                            textShadow: "2px 2px gray,0 0 5px gray",
                        }}
                        className="text-center"
                    >
                        Create Bicycle
                    </h1>
                    <div className=" position-absolute p-5">
                        <form
                            className="text-center input-group position-absolute m-9"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <div className="input-group mb-3 -ml-16">
                                    <label htmlFor="exampleInputEmail">
                                        Price :
                                    </label>
                                    <input
                                        className="form-control"
                                        name="price"
                                        type="number"
                                        value={data.price}
                                        onChange={(e) => {
                                            setData("price", e.target.value);
                                        }}
                                        placeholder="price"
                                    />
                                </div>
                                <div className="input-group mb-3 -ml-16">
                                    <label htmlFor="exampleInputEmail">
                                        Description :
                                    </label>
                                    <input
                                        className="form-control"
                                        name="description"
                                        type="text"
                                        value={data.description}
                                        onChange={(e) => {
                                            setData(
                                                "description",
                                                e.target.value
                                            );
                                        }}
                                        placeholder="description"
                                    />
                                </div>
                                <div className="input-group mb-3 -ml-16">
                                    <label htmlFor="exampleInputEmail">
                                        Name :
                                    </label>
                                    <input
                                        className="form-control"
                                        name="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => {
                                            setData("name", e.target.value);
                                        }}
                                        placeholder="name"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="exampleInputEmail">
                                        Wheel Left :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        name="photo_leftWheel"
                                        placeholder="leftWheel"
                                        onChange={(e) => {
                                            setData(
                                                "photo_leftWheel",
                                                e.target.files[0]
                                            );
                                        }}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="exampleInputEmail">
                                        Wheel Right:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        placeholder="rightWheel"
                                        name="photo_rightWheel"
                                        onChange={(e) =>
                                            setData(
                                                "photo_rightWheel",
                                                e.target.files[0]
                                            )
                                        }
                                        // onChange={photo_rightWheel => setData('photo_rightWheel', photo_rightWheel)}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="exampleInputEmail">
                                        Chair:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        placeholder="chair"
                                        name="photo_chair"
                                        onChange={(e) =>
                                            setData(
                                                "photo_chair",
                                                e.target.files[0]
                                            )
                                        }
                                        // onChange={photo_chair => setData('photo_chair', photo_chair)}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="exampleInputEmail">
                                        Body:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        placeholder="body"
                                        name="photo_body"
                                        onChange={(e) =>
                                            setData(
                                                "photo_body",
                                                e.target.files[0]
                                            )
                                        }
                                        // onChange={photo_body => setData('photo_body', photo_body)}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="exampleInputEmail">
                                        Saddle:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        placeholder="saddle"
                                        name="photo_saddle"
                                        onChange={(e) =>
                                            setData(
                                                "photo_saddle",
                                                e.target.files[0]
                                            )
                                        }
                                        // onChange={photo_saddle => setData('photo_saddle', photo)}
                                    />
                                </div>
                            </div>
                            <div className="input-group mb-3 p-4">
                                <button
                                    className="w-36 h-10 "
                                    style={{
                                        backgroundColor: "#eb9dff",
                                        borderColor: "#1234",
                                        borderRadius: "0.75rem",
                                    }}
                                    type="submit"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
