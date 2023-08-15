import React from "react";

function Sidebar({ category, setCategory }) {
    const cat = ["All", "Business", "Finance", "Economics", "Computers", "Science", "Technology", "Entertainment", "Health", "Lifestyle"]

    return (
        <div className="fixed left-0 w-64 h-full bg-gray-900 text-white">
            <div>
                <div className="h-[100px] content-end">push item-s down</div>
                <div className="text-2xl pb-4 pt-3 ml-1">Categories</div>
                <div className="flex justify-start flex-col">
                    {cat.map((c) => (
                        <button 
                            key={c} 
                            className="text-2xl pt-3 ml-6" 
                            onClick={(e) => setCategory(e.target.value)}
                            value={c}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Sidebar;