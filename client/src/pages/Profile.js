import React, { useEffect, useState } from "react";
import ProfileComments from "../components/ProfileComments";

function Profile() {
    const [comments, setComments] = useState([])
    const [articles, setArticles] = useState([])


    useEffect(() => {
        fetch("/comments")
            .then((r) => r.json())
            .then(setComments)

        fetch("/articles")
            .then((r) => r.json())
            .then(setArticles)

    }, [setArticles]);

    return (
        <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-slate-300">
            <h4 className="flex justify-center m-4 text-4xl">Articles you've Commented on</h4>
            <div className="grid gap-4 grid-cols-3 grid-rows-3 bg-slate-300">
                {comments.map((comment) => (
                    <ProfileComments 
                        key={comment.id}
                        id={comment.id}
                        content={comment.content}
                        article_id={comment.article_id}
                        articles={articles}
                        setArticles={setArticles}
                    />
                ))}
            </div>
        </div>
    )
};

export default Profile;