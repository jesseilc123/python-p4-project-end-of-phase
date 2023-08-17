import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function IndivArticles ({ title, body, category, comments, newCommentRender}) {
    const [users, setUsers] = useState([])
    const [content, setContent] = useState("")
    const { id } = useParams()

    useEffect(() => {
      fetch("/users")
        .then((r) => r.json())
        .then(setUsers)
    }, []);
    
    function handleCommentSubmit(e) {
        e.preventDefault();
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "content": content,
                "article_id": id,
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then(e => {
                        setContent("")
                        newCommentRender(e)
                    })
                } else {
                    r.json().then((err) => console.log(err))
                }
        })
    }

    return  (
        <div className="bg-gray-800">
            <div className="border-black border-2 mt-3 mx-2 p-3 rounded-xl bg-gray-400">
                <h2 className="font-bold text-4xl">{title}</h2>
                <p className="border-black font-bold border-2 rounded-xl px-2 py-1 my-2 h-fit w-fit bg-orange-300">{category}</p>
                <p className="text-2xl indent-8 mt-8 mb-2">{body}</p>
            </div>
            <div className="flex flex-col border-black border-2 mt-3 mx-2 mb-8 p-3 rounded-xl bg-gray-400">
                <h4 className="text-2xl font-bold">Comments</h4>
                <div>
                    {comments.map(comment => (
                        <div key={comment.id} className="border-black border-2 rounded-xl px-2 py-1 my-2 h-fit w-fit bg-slate-300">
                            <div>
                                {users.filter(user => user.id === comment.user_id).map(name => (
                                    <p 
                                        key={name.id} 
                                        className="text-xl font-semibold"
                                    >
                                            {name.username}
                                    </p>
                                ))}
                            </div>
                            <div className="text-lg  rounded-xl p-1 ">{comment.content}</div>
                        </div>
                    ))}
                </div>
                <div className=" h-full w-full mt-3 p-3 rounded-xl">
                    <h2 className="flex justify-start text-xl font-bold">Add comment...</h2>
                    <form className="w-full" onSubmit={handleCommentSubmit}>
                        <div className="mb-4 flex">
                            <input 
                                className="w-full border-2 border-black rounded-xl p-1 pl-2 text-xl bg-gray-300"
                                type="text"
                                id="content"
                                autoComplete="off"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <button type="submit" className="flex ml-1 items-end justify-center font-bold border-black border-2 p-[10px] rounded-xl bg-orange-300 hover:bg-gray-500 transition ease-in-out">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-800 text-gray-800">add bottom divider</div>
        </div>
        
    )
}

export default IndivArticles;