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
            .then(e => setArticles(e))

    }, []);

    function editRender(e) {
        const newComments = comments.map((comment) => {
            if (comment.id === e.id) {
                comment.content = e.content
            }
        return comment
        })
        setComments(newComments)
    }

    function deleteRender(id) {
        const newComments = comments.filter((comment) => {
            if (comment.id !== id) {
                return comment
            }
        })
        setComments(newComments)
    }

    return (
        <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-gray-800">
            <h4 className="flex justify-center m-4 text-4xl text-white font-bold">Articles you've Commented on</h4>
            <div className="grid grid-cols-3 grid-rows-3 bg-gray-800">
                {comments.map((comment) => (
                    <ProfileComments 
                        key={comment.id}
                        id={comment.id}
                        content={comment.content}
                        article_id={comment.article_id}
                        articles={articles}
                        editRender={editRender}
                        deleteRender={deleteRender}
                    />
                ))}
            </div>
            <div className="bg-gray-900 h-[50px]"></div>
        </div>
    )
};

export default Profile;