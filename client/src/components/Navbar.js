import React, { useEffect, useState } from "react";
import schnout_favicon from "../schnout_favicon.png"
import { NavLink } from "react-router-dom"

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
        <div className="flex flex-row z-[100] h-24 w-full bg-gray-800">
            <div className="flex h-full w-fit items-center">
                <button className="p-3 scale-[100%] flex-row grid-flow-row">
                    <img src={schnout_favicon} alt="logo"/>
                    <p className="text-white p-3">
                        Schnout
                    </p>
                </button>
                <button className="text-white p-3">
                    :
                </button>
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