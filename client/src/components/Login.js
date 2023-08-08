import React, { useEffect, useState } from "react";
import LoginForm from "../pages/LoginForm"
function Login() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="flex items-center justify-center flex-col">
            <div className="font-mono text-[200px] my-8 ">Schnout</div>
            {showLogin ? (
                <>
                    <LoginForm />
                    <p>
                        Don't have an account? &nbsp;
                        <button onClick={() => console.log("click")} className=" border-2 p-[8px] rounded bg-gray-700 hover:bg-slate-500">
                            <p className="text-white">
                                Sign Up
                            </p>
                        </button>
                    </p>
                </>
            ) : (
                console.log("false")
            )}
        </div>
    )
};

export default Login;