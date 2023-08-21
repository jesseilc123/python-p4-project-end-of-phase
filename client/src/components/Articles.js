import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Articles ({ id, title, body, category }) {
    return  (
        <div key={id} className="h-[500px] grid border-black border-2 mt-3 p-2 rounded-xl mx-2 bg-gray-400 shadow-md">
            <div className="h-[45px]">
                <h2 className="h-full font-bold text-4xl line-clamp-[1] text-clip overflow-clip">{title}</h2>
            </div>
            <p className="border-black font-bold border-2 rounded-xl px-2 py-1 my-2 h-fit w-fit bg-orange-300">{category}</p>
            <div className="h-full">
                <p className="text-2xl indent-8 overflow-clip line-clamp-6 text-clip">{body}</p>
            </div>
            <Link to={`/articles/${id}`}>
                <p className="flex items-center h-[50px] justify-center transform ease-in-out delay-50 hover:-translate-y-1 hover:text-xl">Read More</p>
            </Link>
        </div> 
    )
}

export default Articles;