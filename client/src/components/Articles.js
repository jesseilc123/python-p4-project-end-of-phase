import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Articles ({ id, title, body, category }) {
    return  (
        <div key={id} className="h-[500px] overflow-clip grid border mt-3 p-1 rounded-lg mx-2 shadow-md">
            <h2 className="font-bold text-4xl">{title}</h2>
            <p className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">{category}</p>
            <p className="text-2xl">{body.substring(0, 300)}...</p>
            <Link to={`/articles/${id}`}>Read More</Link>
        </div>
        
    )
}

export default Articles;