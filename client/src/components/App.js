import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Login from "./Login";

function App() {
  return (
    <div>
        <Login />
    </div>
  )
}

export default App;
