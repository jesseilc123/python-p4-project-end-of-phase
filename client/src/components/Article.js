import React from "react";

function Article ({ id, title, body, created_at, updated_at }) {
    return  (
        <div className="border-2">
            <h2 className="font-bold text-xl">{title}</h2>
            <p>{body}</p>
            <div>{created_at}</div>
            <div>{updated_at}</div>
        </div>
    )
}

export default Article;