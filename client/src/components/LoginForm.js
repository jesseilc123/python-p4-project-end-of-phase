import React, { useState } from "react";

function LoginForm ( { setUser } ) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [invalid, setInvalid] = useState(false)

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
                r.json().then((user) => {
                    setUser(user)
                    setInvalid(false)
                });
            } else {
                setInvalid(!invalid)
            }
        })
    }   

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="w-[400px]">
            <div>
                <label className="text-4xl font-bold text-white">Username</label>
                <input 
                    className={`mt-1 w-full h-full border-2 border-black rounded-xl p-2 text-xl bg-gray-400 placeholder-black focus:outline-blue-400 ${invalid ? "border-red-700" : ""}`}
                    type="text"
                    id="username"
                    placeholder="Enter your username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {invalid ? <p className="text-red-700">Invalid username or password</p> : <p>.</p>}
            </div>
            <div>
                <label className="text-4xl font-bold text-white">Password</label>
                <input 
                    className={`mt-1 w-full h-full border-2 border-black rounded-xl p-2 text-xl bg-gray-400 placeholder-black focus:outline-blue-400 ${invalid ? "border-red-700" : ""}`}
                    type="password"
                    id="password"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                />
                {<p>.</p>}
            </div>
            <div >
                <button type="submit" className="flex w-full text-xl items-center justify-center font-bold border-black border-2 p-[10px] rounded-xl bg-orange-300 hover:bg-gray-500 hover:text-white">
                    Login
                </button>
            </div>
        </form>
    )
};

export default LoginForm;