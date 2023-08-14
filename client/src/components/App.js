import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Login from "../pages/Login";
import ArticleDetail from "./ArticleDetail";

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
            <Route path="/articles/:id" component={ArticleDetail}/>
            <Route path="/"> 
              <Home search={search} category={category}/>
            </ Route>
          </Switch>
        </main>
    </div>
  )
}

export default App;
