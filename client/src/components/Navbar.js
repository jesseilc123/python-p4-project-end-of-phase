import React, { useEffect, useState } from "react";

function Navbar() {
    return (
        <div className="flex flex-row z-[100] h-24 w-full bg-gray-800">
            <div className="flex h-full w-fit items-center">
                <button className="text-white p-3">
                    Logo
                </button>
                <button className="text-white p-3">
                    Browse
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
                    Log In
                </div>
                <div className="text-white p-3">
                    Sign Up
                </div>
            </div>
        </div>
    )
};

export default Navbar;