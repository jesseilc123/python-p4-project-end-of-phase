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

    return (
        <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-slate-300">
            {articles.filter(article => id == article.id).map(article => (
                <IndiviArticle 
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    body={article.body}
                    category={article.category}
                    comments={article.comments}
                /> 
            ))}
        </div>

    );
};

export default ArticleDetail;