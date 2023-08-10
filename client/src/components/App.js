import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Login from "../pages/Login";

function App() {
  const [user, setUser] = useState(null);

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
        <Navbar user={user} setUser={setUser}/>
        <Sidebar />
        <Home />
    </div>
  )
}

export default App;
