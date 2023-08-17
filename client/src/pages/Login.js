import React, { useState } from "react";
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"

function Login( { setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="flex flex-col bg-gray-900 h-screen">
            {/* <img className="flex scale-[25%] -translate-y-[100px] " src={schnout_logo} alt="logo"/> */}
            <h1 className="text-9xl font-extrabold text-white flex justify-center mt-[200px] mb-10">Schnout</h1>
            <div className="flex flex-col items-center justify-center">
                {showLogin ? (
                    <>
                        <div className="flex flex-row">
                            <p>
                                <button onClick={() => setShowLogin(true)} className="mr-4 border-2 p-[10px] border-black rounded-xl bg-orange-300 hover:bg-gray-500 transition ease-in-out">
                                    <p className="text-black font-bold text-xl">
                                        Log in
                                    </p>
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] mx-3 border-black rounded-xl bg-gray-900 hover:bg-gray-500 transition ease-in-out">
                                    <p className="text-white text-lg">
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
                                <button onClick={() => setShowLogin(true)} className="mr-4 border-2 p-[10px] border-black rounded-xl bg-gray-900 hover:bg-gray-500 transition ease-in-out">
                                    <p className="text-white font-bold text-lg">
                                        Log in
                                    </p>
                                </button>
                            </p>
                            <p>
                                <button onClick={() => setShowLogin(false)} className=" border-2 p-[10px] mx-3 border-black rounded-xl bg-orange-300 hover:bg-gray-500 transition ease-in-out">
                                    <p className="text-black font-bold text-xl">
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