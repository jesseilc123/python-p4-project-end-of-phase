import React, { useEffect, useState } from "react";

function Articles ({ title, body, category, comments }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
      fetch("/users")
        .then((r) => r.json())
        .then(setUsers)
    }, []);
  
    return  (
        <div>
            <div className="border mt-3 p-1 rounded-lg ">
                <h2 className="font-bold text-4xl">{title}</h2>
                <p className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">{category}</p>
                <p className="text-xl">{body}</p>
            </div>
            <div className="flex flex-col w-[50%] border mt-3 p-1 rounded-lg ">
                <p>Comments</p>
                <div>{comments.map(comment => (
                    <div className="border rounded-lg px-2 py-1 my-2 h-fit w-fit">
                        <div>{users.filter(user => user.id == comment.user_id).map(name => (<p>{name.username}</p>))}</div>
                        <div className="ml-3">{comment.content}</div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Articles;