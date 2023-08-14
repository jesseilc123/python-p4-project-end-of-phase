import React, { useEffect, useState } from "react";
import Article from "../components/Articles"

function Home( { search , category }) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("/articles")
      .then((r) => r.json())
      .then(setArticles)
  }, []);


  return (
    <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-slate-300">
      <div className="grid gap-4 grid-cols-3 grid-rows-3 bg-slate-300">
        {articles.filter((article) => {         
          if (search == ""){
            if(category == "All"){
              return article
            } else if (article.category == category){
              return article
            }
          }
          if (article.title.toLowerCase().includes(search.toLowerCase())){
            if(category == "All"){
              return article
            } else if (article.category == category){
              return article
            }
          } 
        }).map((article) => (
          <Article 
            key={article.id}
            id={article.id}
            title={article.title}
            body={article.body}
            category={article.category}
          />
        ))}
      </div>
      {/* <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {articles.map((article) => (
          <Article 
            key={article.id}
            id={article.id}
            title={article.title}
            body={article.body}
            category={article.category}
          />
        ))}
      </div> */}
    </div>
  )
}

export default Home;