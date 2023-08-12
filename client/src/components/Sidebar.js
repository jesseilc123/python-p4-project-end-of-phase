import React, { useEffect, useState } from "react";

function Sidebar() {
    const cat = ["Business", "Finance", "Economics", "Computers", "Science", "Technology", "Entertainment", "Health", "Lifestyle"]
    return (
        <div className="fixed left-0 w-64 h-full bg-gray-900 text-white">
            <div >
                <div className="h-[100px] content-end">push item-s down</div>
                <div className="text-2xl pb-4 pt-3 ml-1">Categories</div>
                <div>
                    {cat.map((c) => (
                        <p 
                            key={c}
                            className="text-2xl pt-3 ml-6"
                        >
                            {c}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Sidebar;