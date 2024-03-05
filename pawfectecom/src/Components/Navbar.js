import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaArrowDown } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserProvider";
import SlideInAlert from "./Alerts/SlideInAlert";
import { stylecategories } from "../Model/Category";

function Navbar() {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    const [basketCount, setBasketCount] = useState(
        userContext.userBasket.GetSize()
    );

    useEffect(() => {
        userContext.subscribe("basketUpdate", UpdateBasketCount);
    }, []);

    function UpdateBasketCount(eventObj) {
        console.log("Basket Event Triggered!");
        setBasketCount(eventObj.count);
    }

    return (
        <div className="flex flex-row justify-between px-4 py-3 items-center border-b-4 relative max-w-screen">
            <SlideInAlert />
            <div
                onClick={() => navigate("/")}
                className=" md:flex md:items-end hover:cursor-pointer hover:scale-110 transition-all"
            >
                <img
                    className="w-12 md:w-28 md:h-28 drop-shadow-lg"
                    src="Images/logo3.png"
                ></img>
            </div>
            <div className="flex-1 text-center w-4/5 justify-center items-center">
                <div className="flex flex-wrap flex-row justify-center items-center w-full text-sm md:text-2xl gap-3">
                    {stylecategories.map((category, index) => {
                        return (
                            <div
                                onClick={() => {
                                    navigate("/products", {
                                        state: {
                                            category: parseInt(category.type),
                                        },
                                    });
                                }}
                                className="hover:scale-105 cursor-pointer transition-all hover:border-b-primary hover:border-b-4"
                            >
                                {category.categoryname}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <CiUser className="text-black text-2xl cursor-pointer transition-all hover:scale-110 md:text-4xl hover:border-b-primary hover:border-b-4" />
                <div
                    onClick={() => navigate("/checkout")}
                    className="relative hover:scale-105 cursor-pointer transition-all hover:border-b-primary hover:border-b-4"
                >
                    <LuShoppingBasket className="text-black text-xl md:text-4xl" />
                    {userContext.userBasket.GetSize() > 0 ? (
                        <div className="z-10 bg-red-500 text-white text-center rounded-full w-3.5 h-3.5 absolute -bottom-1.5 -right-1 flex items-center justify-center md:-bottom-0.5 md:-right-0.5">
                            <div className="text-xs text-white">
                                {basketCount > 9 ? "9+" : basketCount}
                            </div>
                            <div className="bg-red-300 absolute w-full h-full rounded-full z-0 animate-ping"></div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
