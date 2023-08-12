import React from "react";

function Articles ({ id, title, body, category }) {
    return  (
        <div className="h-[500px] overflow-clip grid border mt-3 p-1 rounded-lg">
            <h2 className="font-bold text-4xl">{title}</h2>
            <p className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">{category}</p>
            <p className="text-2xl">{body.substring(0, 300)}...</p>
            <button>Read More</button>
        </div>
        
    )
}

export default Articles;