import React from "react";
import { FaBars } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

function Navbar() {
    return (
        <div className="flex flex-row justify-between px-4 py-3 items-center">
            <div>
                <img className="w-12" src="./Images/logo.png"></img>
            </div>
            <div className="flex-1 text-center w-4/5 justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <input
                        className="px-2 rounded-xl border border-black h-1/2 text-sm"
                        placeholder="Search..."
                    ></input>
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <CiUser className="text-black text-2xl" />
                <div className="">
                    <LuShoppingBasket className="text-black text-xl" />
                    <div className="">3</div>
                </div>

                <FaBars className="text-black" />
            </div>
        </div>
    );
}

export default Navbar;
