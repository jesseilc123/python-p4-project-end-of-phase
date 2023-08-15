import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router";

function ProfileComments ({ id, content, article_id, articles, }) {
    const [isForm, setIsForm] = useState(true)
    const [comment, setComment] = useState(content)
    const history = useHistory();

    function hideCommentEdit() {
        setIsForm((isForm) => (!isForm))
    }

    function handleCommentDelete() {
        console.log("delete")
    }

    function handleCommentEdit(e) {
        e.preventDefault();
        console.log("edit")
        fetch("/comments", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": id,
                "content": comment,
            }),
        })
            .then((r) => {
                if (r.ok) {
                    history.push("/profile");
                } else {
                    r.json().then((err) => console.log(err))
                }
        })
    }

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
                <div className="flex flex-row gap-1">
                    <div>
                        {isForm ? (
                            <p className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">
                                {content}
                            </p>
                        ) : (
                            <form>
                                <input 
                                    className="border rounded-lg px-2 py-1 my-2 w-[300px]"
                                    type="text"
                                    id="username"
                                    autoComplete="off"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="flex flex-col hover:bg-green-300 border rounded-lg px-2 py-1 my-2"
                                    onClick={handleCommentEdit}
                                >
                                    Confirm Change?
                                </button>
                            </form>
                        )}
                    </div>
                    <button 
                        className="border rounded-lg px-2 py-1 my-2 h-fit w-fit hover:bg-gray-300"
                        onClick={hideCommentEdit}
                    >
                        Edit
                    </button>
                    <button 
                        className="border rounded-lg px-2 py-1 my-2 h-fit w-fit hover:bg-red-300"
                        onClick={handleCommentDelete}
                    >
                        X
                    </button>
                </div>
                <Link to={`/articles/${article_id}`} className="border rounded-lg px-2 py-1 my-2 h-fit w-fit hover:bg-gray-400">See article</Link>
            </div>
        </div> 
    )
}

export default ProfileComments;