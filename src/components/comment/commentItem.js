import React from "react";

export function CommentItem(props) {
    return (
        <div className="container">
            <h5>{props.author}</h5>
            <p>{props.text}</p>
        </div>
    );
}