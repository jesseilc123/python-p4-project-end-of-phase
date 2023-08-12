import React, { useEffect, useState } from "react";
import schnout_favicon from "../schnout_favicon.png"
import { Link } from "react-router-dom"

function Navbar( { user, setUser }) {

    function handleLogout() {
        console.log(user)
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
    }

    return (
        <div className="fixed flex flex-row z-[100] h-24 w-full bg-gray-800">
            <div className="flex flex-row h-full w-fit items-center">
                <Link to="/" className="flex flex-row  ml-12 grid-flow-row justify-center items-center">
                    <img className="scale-[40%]" src={schnout_favicon} alt="logo"/>
                    <p className="flex text-white text-4xl">
                        SCHNOUT
                    </p>
                </Link>
            </div>
            <div className="relative flex items-center justify-end w-full gap-3">
                <form className="flex items-center justify-center p-3 text-white">
                    <input className="pl-3"placeholder="Search"/>
                </form>
            </div>
            <div className="flex w-full items-center  justify-end">
                <div className="text-white p-3">
                    Welcome, <span className="italic">{user.username}</span>
                </div>
                <p className="text-white p-3">
                    Profile
                </p>
                <button className="text-white p-3" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
};

export default Navbar;