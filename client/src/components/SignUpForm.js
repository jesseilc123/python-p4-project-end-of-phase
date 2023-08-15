import React, { useState } from "react";

function SignUpForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Signup Submit")
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => {
                        setUser(user)}
                    )
                } else {
                    r.json().then((err) => console.log(err))
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} className="w-[400px]">
            <div className="mb-4">
                <label className="text-[18px] font-bold	">Username</label>
                <input 
                    className="w-full h-full border-2 border-black rounded p-1 text-[18px]"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="text-[18px] font-bold	">Password</label>
                <input 
                    className="w-full h-full border-2 border-black rounded p-1 text-[18px]"
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="text-[18px] font-bold	">Confirm Password</label>
                <input 
                    className="w-full h-full border-2 border-black rounded p-1 text-[18px]"
                    type="password"
                    id="password_confirmation"
                    autoComplete="off"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <div >
                <button type="submit" className="flex w-full items-center justify-center font-bold border-2 border-black p-[10px] rounded bg-orange-300 hover:bg-slate-500">
                    Sign Up
                </button>
            </div>
        </form>
    )
}

export default SignUpForm;