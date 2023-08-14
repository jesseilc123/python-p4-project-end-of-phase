import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleDetail() {
    const [indivArticle, setIndivArticle] = useState(1);
    const { id } = useParams()


    useEffect(() => {
        fetch(`/articles/${id}`)
            .then(r => r.json())
            .then(data => setIndivArticle(data))
    }, [id])

    if(!setIndivArticle) return <h1>loading...</h1>

    const { title, body, category} = indivArticle

    return (
        <div>
            test
        </div>
    );
};

export default ArticleDetail;