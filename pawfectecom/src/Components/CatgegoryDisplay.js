import React from "react";
import "../Styles/CategoryStyle.css";
import { useNavigate } from "react-router-dom";
import CategoryButton from "./Buttons/CategoryButton";

//Note to self
/* improve sale banner
animations?
category images
product page
cart functionality
product class
all products page
add search icon inside search bar
add a component for displaying x amount of products like category in home feed.#
alternate colours for display images for categories. 
add context for user
add login screen with google api*/

function CatgegoryDisplay(props) {
    return (
        <div className="bg-white flex flex-row justify-center">
            <div className="flex flex-row flex-wrap w-full justify-center items-center md:flex-nowrap gap-2 py-2">
                {props.categories.map((category, index) => {
                    return <CategoryButton key={index} info={category} />;
                })}
            </div>
        </div>
    );
}

export default CatgegoryDisplay;
