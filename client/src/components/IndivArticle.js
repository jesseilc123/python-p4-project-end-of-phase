import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

function Articles ({ title, body, category, comments }) {
    const [users, setUsers] = useState([])
    const [content, setContent] = useState("")
    const history = useHistory();
    const { id } = useParams()

    useEffect(() => {
      fetch("/users")
        .then((r) => r.json())
        .then(setUsers)
    }, []);
    
    function handleCommentSubmit(e) {
        e.preventDefault();
        console.log(id)
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
                    history.push("/profile");
                } else {
                    r.json().then((err) => console.log(err))
                }
        })
    }

    return  (
        <div>
            <div className="border mt-3 p-1 rounded-lg ">
                <h2 className="font-bold text-4xl">{title}</h2>
                <p className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">{category}</p>
                <p className="text-xl">{body}</p>
            </div>
            <div className="flex flex-col w-[50%] border mt-3 p-1 rounded-lg ">
                <h4>Comments</h4>
                <div>
                    {comments.map(comment => (
                        <div key={comment.id} className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">
                            <div>{users.filter(user => user.id == comment.user_id).map(name => (<p key={name.id}>{name.username}</p>))}</div>
                            <div className="ml-3">{comment.content}</div>
                        </div>
                    ))}
                </div>

                <h2 className="flex justify-start">Add comment...</h2>
                <form className="w-[400px]" onSubmit={handleCommentSubmit}>
                    <div className="mb-4 flex flex-row">
                        <input 
                            className="w-full h-12 border-2 border-black rounded p-1 text-[18px]"
                            type="text"
                            id="content"
                            autoComplete="off"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button type="submit" className="flex items-end justify-center font-bold border-black border-2 p-[10px] rounded bg-orange-300 hover:bg-slate-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Articles;