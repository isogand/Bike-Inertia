import React from "react";
import Form from "react-bootstrap/Form";
import {useForm} from "@inertiajs/inertia-react";

const Comments = (props) => {
    const {setData, data, post} = useForm({
        photo: "",
        comment: "",
        product_id: props.product_id,
    });
    console.log("create", props.product_id);
    function handleSubmit(e) {
        e.preventDefault();
        post(route("comment.store"));
    }
    return (
        <>
            <div className="absolute font-bold text-xl text-black pt-7 pl-5 ">
                COMMENTS
            </div>
            <form
                onSubmit={handleSubmit}
                style={{backgroundColor: "#FBF9ED"}}
                className="absolute p-5 mx-5 mt-16  border rounded-2xl border-black"
            >
                <input
                    style={{backgroundColor: "#FBF9ED"}}
                    name="comment"
                    // type="text"
                    value={data.comment}
                    onChange={(e) => {
                        setData("comment", e.target.value);
                    }}
                    placeholder="write a comment..."
                />
                <div style={{marginBottom: "-25px"}}>
                    <div
                        style={{
                            border: "1px solid #ADADAD",
                            height: "0px",
                            width: "300px",
                            marginTop: "30px",
                        }}
                    ></div>

                    <Form.Group className="position-relative mb-3 w-5">
                        <Form.Control
                            type="file"
                            required
                            name="photo"
                            onChange={(e) => {
                                setData("photo", e.target.files[0]);
                            }}
                        />
                    </Form.Group>
                    <button
                        style={{backgroundColor: "#C4C4C4", fontSize: "13px"}}
                        className="absolute ml-2 m-2 p-2 text-black rounded-full"
                        type="submit"
                    >
                        Add comment
                    </button>
                </div>
            </form>
        </>
    );
};

export default Comments;
