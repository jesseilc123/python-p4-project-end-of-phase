import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"
import schnout_logo from "../schnout_logo.png"

function Login( { setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="flex items-center justify-center flex-col">
            <img className="flex h-96 pt-20 pb-20" src={schnout_logo} alt="logo"/>
            <div>
                {showLogin ? (
                    <>
                        <div className="flex flex-row justify-start">
                            <p>
                                <button onClick={() => setShowLogin(true)} className=" border-2 p-[10px] border-black rounded bg-orange-300 hover:bg-slate-500">
                                    <p className="text-black font-bold">
                                        Log in
                                    </p>
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] mx-3 border-white rounded bg-gray-900 hover:bg-slate-500">
                                    <p className="text-white">
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
                                <button onClick={() => setShowLogin(true)} className=" border-2 p-[10px] rounded bg-gray-900 hover:bg-slate-500">
                                    <p className="text-white">
                                        Log in
                                    </p>
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] mx-3 border-black rounded bg-orange-300 hover:bg-slate-500">
                                    <p className="text-black font-bold">
                                        Sign Up
                                    </p>
                                </button>
                            </p>
                        </div>
                        <SignUpForm />
                    </>
                )}
            </div>
        </div>
    )
};

export default Login;