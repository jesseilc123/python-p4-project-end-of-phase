import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"

function Login() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="flex items-center justify-center flex-col">
            <div className="font-mono text-[200px] my-8 ">Schnout</div>
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
                            <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] rounded bg-gray-900 hover:bg-slate-500">
                                <p className="text-white">
                                    Sign Up
                                </p>
                            </button>
                        </p>
                    </div>
                    <LoginForm />
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
                            <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] border-black rounded bg-orange-300 hover:bg-slate-500">
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
    )
};

export default Login;