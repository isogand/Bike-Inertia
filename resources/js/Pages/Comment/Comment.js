import React from "react";
import Comments from "@/Pages/Comment/Create";
import ShowComment from "@/Pages/Comment/Index";

function Comment(props) {
    console.log("hi", props);
    let element = (
        <div>
            <Comments product_id={props.info.id} />
            <ShowComment />
        </div>
    );
    return element;
}

export default Comment;
