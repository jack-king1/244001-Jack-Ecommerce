import React from "react";
import "../Styles/CategoryStyle.css";

//Note to self
/* improve sale banner
animations?
category images
product page
cart functionality
product class
all products page
add search icon inside search bar */

function CatgegoryDisplay(props) {
    return (
        <div className="bg-white flex flex-row justify-center">
            <div className="flex flex-row flex-wrap w-full justify-center items-center md:flex-nowrap gap-2 py-2">
                {props.categories.map((category, index) => {
                    return (
                        <div className="hover:scale-[110%] hover:cursor-pointer transition-all">
                            <div className="h-20 w-20 md:h-32 md:w-32">
                                <img
                                    className="funky-round"
                                    src={category.image}
                                ></img>
                            </div>
                            {
                                <div className="text-center font-bold">
                                    {category.categoryname}
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CatgegoryDisplay;
