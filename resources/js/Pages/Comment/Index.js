import React from "react";
import {usePage} from "@inertiajs/inertia-react";

const ShowComment = (...props) => {
    const {comment} = usePage().props;
    console.log(props);
    console.log("comment", comment);
    return (
        <>
            <tbody>
                <div
                    style={{overflow: "auto", height: "100px"}}
                    className="mx-5 mt-56 w-72 "
                >
                    {comment.map(({id, comment, photo, name}) => (
                        <tr key={id}>
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                {photo && (
                                    <img
                                        className="block w-8 h-8 rounded-full hover:w-25 h-25 rounded-full"
                                        src={`/images/${photo}`}
                                        alt="Logo"
                                    />
                                )}
                                <td
                                    style={{fontSize: "17px"}}
                                    className=" p-1 text-black mt-1"
                                >
                                    {name}
                                </td>
                                <div className="pt-7 -ml-7">
                                    <td>{comment}</td>

                                    {/* <td>*/}
                                    {/*    {photo && (*/}
                                    {/*        <img*/}
                                    {/*            src={`/images/${photo}`}*/}
                                    {/*            alt=" Logo"*/}
                                    {/*            className="block w-8 h-8  hover:w-25 h-25 absolute top-3 left-56"*/}
                                    {/*        />*/}
                                    {/*    )}*/}
                                    {/*</td> */}
                                </div>
                            </div>
                        </tr>
                    ))}
                </div>
            </tbody>
        </>
    );
};

export default ShowComment;
