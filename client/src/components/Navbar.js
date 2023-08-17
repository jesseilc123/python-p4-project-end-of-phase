import React from "react";
import schnout_favicon from "../schnout_favicon.png"
import {  Link } from "react-router-dom"

function Navbar( { user, setUser, search, setSearch }) {

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        })
    }

    return (
        <div className="fixed flex flex-row z-[100] h-24 w-full bg-gray-900">
            <div className="flex flex-row h-full w-fit items-center">
                <Link to="/" className="flex flex-row  ml-12 grid-flow-row justify-center items-center">
                    <img className="object-scale-down scale-[75%]" src={schnout_favicon} alt="logo"/>
                    <p className="flex text-white text-4xl justify-start">
                        SCHNOUT
                    </p>
                </Link>
            </div>
            <div className="relative flex items-center justify-end ml-[360px] w-full gap-3">
                <form className="flex w-fit items-center justify-center p-3">
                    <input 
                        className="pl-3 border-2 border-black rounded-lg bg-gray-500 text-white text-2xl" 
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </form>
            </div>
            <div className="flex w-full items-center justify-end">
                <div className="text-white text-xl p-3">
                    Welcome, &nbsp;<span className="italic text-orange-300">{user.username}</span>
                </div>
                <Link to="/profile">
                    <p className="text-white text-xl p-3 hover:text-orange-300">Profile</p>
                </Link>
                <button className="text-white text-xl p-3 hover:text-orange-300" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
};

export default Navbar;