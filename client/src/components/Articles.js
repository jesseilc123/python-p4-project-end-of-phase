import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Articles ({ id, title, body, category }) {
    return  (
        <div key={id} className="h-[500px] overflow-clip grid border mt-3 p-1 rounded-lg mx-2 bg-gray-400 shadow-md">
            <h2 className="font-bold text-4xl">{title}</h2>
            <p className="border-black font-bold border-2 rounded-lg px-2 py-1 my-2 h-fit w-fit bg-orange-300">{category}</p>
            <p className="text-2xl indent-8">{body.substring(0, 300)}...</p>
            <Link to={`/articles/${id}`}>
                <p className="flex items-center h-full justify-center transform ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Read More</p>
            </Link>
        </div>
        
    )
}

export default Articles;