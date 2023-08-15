import React, { useEffect, useState } from "react";
import Article from "../components/Articles"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home( { search , category }) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("/articles")
      .then((r) => r.json())
      .then(setArticles)
  }, []);

  function handleNewArticle() {
    console.log("article")
  }

  if (!articles) return <h2>loading</h2>
  return (
    <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-slate-400 rounded-lg">
      <h4 className="flex items-center justify-center m-4 text-4xl">All Articles</h4>
      <div className="grid gap-0 grid-cols-3 grid-rows-3 bg-slate-400">
          {articles.filter(article => {         
            if (search === ""){
              if(category === "All"){
                return article
              } else if (article.category === category){
                return article
              }
            }
            if (article.title.toLowerCase().includes(search.toLowerCase())){
              if(category === "All"){
                return article
              } else if (article.category === category){
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
          <Link 
            className="flex flex-col min-h-[500px] items-center justify-center border mt-3 mx-2 rounded-lg hover:bg-slate-400 shadow-md"
            to="/new_article"
          >
            <p className="text-2xl mb-6">Make new article</p>
            <p className="text-4xl items-center pt-2 justify-center font-bold border-4 border-black h-[75px] w-[75px] shadow-xlg">
              <span>&nbsp;</span> + <span>&nbsp;</span>
            </p>
          </Link>
      </div>
      <div className="bg-slate-300 h-[50px]"></div>
    </div>
  )
}

export default Home;