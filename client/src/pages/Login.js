import React, { useState } from "react";
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"
import schnout_logo from "../schnout_logo.png"

function Login( { setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="flex flex-col bg-gray-600 h-screen">
            {/* <img className="flex scale-[25%] -translate-y-[100px] " src={schnout_logo} alt="logo"/> */}
            <h1 className="text-9xl font-extrabold flex justify-center mt-[200px] mb-10">Schnout</h1>
            <div className="flex flex-col items-center justify-center">
                {showLogin ? (
                    <>
                        <div className="flex flex-row justify-start">
                            <p>
                                <button onClick={() => setShowLogin(true)} className=" border-2 p-[10px] border-black rounded bg-orange-300 hover:bg-slate-500 transition ease-in-out">
                                    <p className="text-black font-bold">
                                        Log in
                                    </p>
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] mx-3 border-black rounded bg-gray-900 hover:bg-slate-500 transition ease-in-out">
                                    <p className="text-gray-400">
                                        Sign Up
                                    </p>
                                </button>
                            </p>
                        </div>
                        <LoginForm setUser={setUser}/>
                    </>
                ) : (
                    <>
                        <div className="flex flex-row justify-start">
                            <p>
                                <button onClick={() => setShowLogin(true)} className=" border-2 p-[10px] rounded bg-gray-900 border-black hover:bg-slate-500 transition ease-in-out">
                                    <p className="text-gray-400">
                                        Log in
                                    </p>
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] mx-3 border-black rounded bg-orange-300 hover:bg-slate-500 transition ease-in-out">
                                    <p className="text-black font-bold">
                                        Sign Up
                                    </p>
                                </button>
                            </p>
                        </div>
                        <SignUpForm setUser={setUser}/>
                    </>
                )}
            </div>
        </div>
    )
};

export default Login;