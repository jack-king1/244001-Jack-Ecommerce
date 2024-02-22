import React from "react";
import { FaBars, FaArrowDown } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
    return (
        <div className="flex flex-row justify-between px-4 py-3 items-center">
            <div>
                <img
                    className="w-12 md:w-40 hover:cursor-pointer hover:scale-110 transition-all"
                    src="./Images/logo.png"
                ></img>
            </div>
            <div className="flex-1 text-center w-4/5 justify-center items-center">
                <div className="flex flex-row justify-center items-center w-full">
                    <input
                        className="px-2 rounded-xl border border-black h-1/2 text-sm md:text-lg md:w-1/2"
                        placeholder="Search..."
                    ></input>
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <CiUser className="text-black text-2xl cursor-pointer transition-all hover:scale-110 md:text-4xl" />
                <div className="relative hover:scale-105 cursor-pointer transition-all">
                    <LuShoppingBasket className="text-black text-xl md:text-4xl" />
                    <div className="z-10 bg-red-500 text-white text-center rounded-full w-3.5 h-3.5 absolute -bottom-1.5 -right-1 flex items-center justify-center md:-bottom-0.5 md:-right-0.5">
                        <div className="text-xs text-white">3</div>
                        <div className="bg-red-300 absolute w-full h-full rounded-full z-0 animate-ping"></div>
                    </div>
                </div>

                <FaBars className="text-black cursor-pointer md:hidden" />
                <div
                    className="hidden flex flex-row md:flex hover:cursor-pointer hover:scale-105 
                transition-all justify-center items-center"
                >
                    <div>Categories</div>
                    <div>
                        <FaCaretDown className="text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
