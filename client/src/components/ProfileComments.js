import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProfileComments ({ id, content, article_id, articles}) {

    return  (
        <div className="h-[500px] overflow-clip grid border mt-3 p-1 rounded-lg ">
            <div>
                {articles.filter(article => article.id == article_id).map(article => (
                    <div key={article.id}>
                        <h2 className="font-bold text-4xl">{article.title}</h2>
                        <p className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">{article.category}</p>
                        <p className="text-xl">{article.body.substring(0, 300)}...</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-end">
                <h2>Your comment:</h2>
                <p className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">{content}</p>
                <Link to={`/articles/${article_id}`} className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">See article</Link>
            </div>
        </div> 
    )
}

export default ProfileComments;