import React from "react";
import { FaArrowRight } from "react-icons/fa6";

//make resuable, maybe pass in props for image and text object.
//A banner that displays a banner on the home page with a gradient.
function HeroBanner(props) {
    return (
        <div
            className={`flex flex-row min-h-[80vh] bg-gradient-to-b ${props.colone} from-cyan-500 to-blue-500 justify-center`}
        >
            <div
                className={`flex flex-col-reverse h-f w-4/5 xl:flex-row ${
                    props.reverse ? "xl:flex-row-reverse" : "xl:flex-row"
                }`}
            >
                <div className="flex-1 flex items-center justify-center">
                    <img
                        className="object-contain w-full drop-shadow-2xl md:w-2/3 "
                        src="Images/herocat.png"
                    ></img>
                </div>
                <div
                    className={`flex-1 text-center text-6xl flex flex-col gap-12 font-bold justify-center md:${
                        props.reverse
                            ? "items-start text-left"
                            : "items-end text-right"
                    }`}
                >
                    <div className="text-8xl text-center">Spring Sale!</div>
                    <div className="flex flex-row gap-4 items-baseline">
                        <div className="text-8xl text-secondary">50%</div> OFF
                    </div>
                    <div
                        className={`${
                            props.coltwo
                        } w-full md:w-1/2 p-8 text-white rounded-xl text-6xl text-center md:${
                            props.reverse ? "mr-auto" : "ml-auto"
                        } hover:cursor-pointer`}
                    >
                        Buy Now
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
