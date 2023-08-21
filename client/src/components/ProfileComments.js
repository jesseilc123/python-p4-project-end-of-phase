import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProfileComments ({ id, content, article_id, articles, editRender, deleteRender}) {
    const [isForm, setIsForm] = useState(true)
    const [comment, setComment] = useState(content)


    function hideCommentEdit() {
        setIsForm((isForm) => (!isForm))
    }

    function handleCommentDelete() {
        console.log("delete")
        fetch("/comments", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": id,
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then(deleteRender(id))
            } else {
                r.json().then((err) => console.log(err))
            }
        })
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
                    r.json().then(e => {
                        editRender(e)
                        setIsForm(!isForm)
                    })
                } else {
                    r.json().then((err) => console.log(err))
                }
        })
    }

    return  (
        <div className="h-[500px] border-black border-2 overflow-clip grid mt-3 mx-2 p-1 rounded-xl bg-gray-400 shadow-md">
            <div>
                {articles.filter(article => article.id === article_id).map(article => (
                    <div key={article.id}>
                        <h2 className="font-bold text-4xl">{article.title}</h2>
                        <p className="border-black font-bold border-2 rounded-xl px-2 py-1 my-2 h-fit w-fit bg-orange-300 shadow-md">{article.category}</p>
                        <p className="text-2xl text-clip overflow-hidden line-clamp-6">{article.body}...</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-end">
                <h2 className="text-xl font-semibold">Your comment:</h2>
                <div className="flex flex-row gap-1">
                    <div>
                        {isForm ? (
                            <p className="border-black border-2 bg-orange-300 text-lg font-semibold rounded-xl px-2 py-1 my-2 h-fit w-fit shadow-md">
                                {content}
                            </p>
                        ) : (
                            <form>
                                <input 
                                    className="border-black rounded-xl px-2 py-1 my-2 w-[300px] h-fit text-lg"
                                    type="body"
                                    id="username"
                                    autoComplete="off"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className=" justify-end bg-slate-300 hover:bg-green-300 border-black border-2 font-semibold rounded-xl px-2 py-1 my-2 ml-1 text-lg"
                                    onClick={handleCommentEdit}
                                >
                                    Confirm?
                                </button>
                            </form>
                        )}
                    </div>
                    <button 
                        className={`border-black border-2 font-semibold rounded-xl px-2 py-1 my-2 h-fit w-fit bg-slate-300 text-lg ${isForm ? "hover:bg-gray-300" : "hover:bg-red-300"}`}
                        onClick={hideCommentEdit}
                    >
                        {isForm ? "Edit" : "Cancel"}
                    </button>
                    <button 
                        className={`border-black border-2 font-semibold rounded-xl px-3 py-1 my-2 h-fit w-fit hover:bg-red-300 bg-slate-300 text-lg ${isForm ? "flex" : "hidden"}`}
                        onClick={handleCommentDelete}
                    >
                        X
                    </button>
                </div>
                <Link to={`/articles/${article_id}`} className="border-black border-2 font-semibold bg-slate-300 shadow-md rounded-xl px-2 py-1 my-2 h-fit w-fit text-lg hover:bg-slate-400">See article</Link>
            </div>
        </div> 
    )
}

export default ProfileComments;