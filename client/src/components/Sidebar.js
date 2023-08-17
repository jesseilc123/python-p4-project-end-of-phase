import React from "react";
import {  Link } from "react-router-dom"

function Sidebar({ category, setCategory }) {
    const cat = ["All", "Business", "Finance", "Economics", "Computers", "Science", "Technology", "Entertainment", "Health", "Lifestyle"]

    return (
        <div className="fixed left-0 w-64 h-full bg-gray-900 text-white">
            <div>
                <div className="h-[100px] content-end">push item-s down</div>
                <div className="text-2xl pb-2 pt-3 ml-2">Categories</div>
                <div className="flex flex-col justify-start items-start">
                    {cat.map((c) => (
                        <button 
                            key={c} 
                            className="text-2xl pt-3 ml-8 hover:text-orange-300" 
                            onClick={(e) => setCategory(e.target.value)}
                            value={c}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <button 
                    className="text-2xl pt-6 ml-2 mt-3 hover:text-orange-300" 
                    onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                >
                    Back to top
                </button>
                <Link to="/new_article" className="flex flex-col text-2xl ml-2 mt-4 hover:text-orange-300">Create New Article</Link>
            </div>
        </div>
    )
};

export default Sidebar;