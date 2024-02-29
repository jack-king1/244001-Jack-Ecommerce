import React from "react";
import { FaArrowRight } from "react-icons/fa6";

//make resuable, maybe pass in props for image and text object.
function HeroBanner(props) {
    return (
        <div className="flex flex-row min-h-[80vh] bg-gradient-to-b from-primary justify-center">
            <div className="flex w-4/5 justify-center items-center">
                <div className="flex-1 text-6xl flex-col ">
                    <div className="pb-8">New Arrivals</div>
                    <div className="font-bold">New 🐈🛏️ </div>
                    <div className="font-bold">Collections</div>
                    <div className="font-bold">For your furry friend!</div>
                    <div className="mt-4">
                        <button className="bg-secondary text-white text-3xl w-1/2 p-3 rounded-lg text-left flex items-center justify-between">
                            Latest Collections <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-4/5">
                        <img
                            className="object-contain drop-shadow-2xl"
                            src="Images/herocat.png"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
