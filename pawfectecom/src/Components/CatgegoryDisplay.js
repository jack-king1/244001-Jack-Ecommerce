import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryButton from "./Buttons/CategoryButton.js";

function CatgegoryDisplay(props) {
    return (
        <div className="bg-white flex flex-row justify-center pb-4">
            <div className="flex flex-row flex-wrap w-full justify-center items-center md:flex-nowrap gap-2 py-2">
                {props.categories.map((category, index) => {
                    return <CategoryButton key={index} info={category} />;
                })}
            </div>
        </div>
    );
}

export default CatgegoryDisplay;
