import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Login from "../pages/Login";
import ArticleDetail from "../pages/ArticleDetail";
import Profile from "../pages/Profile";
import NewArticle from "../pages/NewArticle";

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser}/>;
  
  return (
    <div>
        <Navbar user={user} setUser={setUser} search={search} setSearch={setSearch}/>
        <Sidebar category={category} setCategory={setCategory}/>
        <main>
          <Switch>
            <Route path="/articles/:id"> 
              <ArticleDetail />
            </ Route>
            <Route path="/new_article"> 
              <NewArticle />
            </ Route>
            <Route path="/profile"> 
              <Profile />
            </ Route>
            <Route exact path="/"> 
              <Home search={search} category={category}/>
            </ Route>
            <Route path="*">
              <div className="h-screen w-full bg-gray-900">
                <h1 className="absolute inset-x-0 top-[90px] left-64 text-8xl text-white">404 Page not found</h1>
              </div>
            </Route>
          </Switch>
        </main>
    </div>
  )
}

export default App;
