import React, { useState } from "react";

function LoginForm( { setUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then(r => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                alert("Incorrect username or password")
            }
        })
    }   

    return (
        <form onSubmit={handleSubmit} className="w-[400px]">
            <div className="mb-4">
                <label className="text-4xl font-bold text-black">Username</label>
                <input 
                    className="w-full h-full border-2 border-black rounded p-2 text-xl bg-gray-400"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="text-4xl font-bold">Password</label>
                <input 
                    className="w-full h-full border-2 border-black rounded p-2 text-xl bg-gray-400"
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div >
                <button type="submit" className="flex w-full items-center justify-center font-bold border-black border-2 p-[10px] rounded bg-orange-300 hover:bg-slate-500">
                    Login
                </button>
            </div>
        </form>
    )
};

export default LoginForm;