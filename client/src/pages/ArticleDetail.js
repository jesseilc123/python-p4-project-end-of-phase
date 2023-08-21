import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndiviArticle from "../components/IndivArticle"

function ArticleDetail() {
    const [articles, setArticles] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch("/articles")
            .then(r => r.json())
            .then(setArticles)
    }, [id])

    function newCommentRender(e) {
        const articlesNewComment = articles.filter((article) =>{
            if (article.id === e.article_id) {
                return article.comments.push(e)
            }
        }).map((article) => article)
        setArticles(articlesNewComment)
    }
    return (
        <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-gray-900">
            {articles.filter((article) => (id) == article.id).map(article => (
                <IndiviArticle 
                    key={article.id}
                    created_at={article.created_at}
                    title={article.title}
                    body={article.body}
                    category={article.category}
                    comments={article.comments}
                    newCommentRender={newCommentRender}
                /> 
            ))}
        </div>

    );
};

export default ArticleDetail;