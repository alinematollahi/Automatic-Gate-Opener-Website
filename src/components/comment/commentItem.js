import React from "react";

export function CommentItem(props) {
    return (
        <div className="container">
            <h3>{props.author}</h3>
            <p>{props.text}</p>
        </div>
    );
}