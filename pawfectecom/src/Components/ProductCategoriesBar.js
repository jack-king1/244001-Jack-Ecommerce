import React from "react";
import { stylecategories } from "../Model/Category";

function ProductCategoriesBar(props) {
    return (
        <div className="flex flex-row h-9 w-full justify-center items-center">
            <div className="w-1/2 flex flex-row justify-between text-center items-center">
                {stylecategories.map((cat, index) => {
                    return (
                        <div
                            onClick={() => props.action(cat.type)}
                            className="flex-1 transition-all hover:bg-green-200 hover:text-xl hover:cursor-pointer"
                        >
                            {cat.categoryname}
                        </div>
                    );
                })}
                <div
                    onClick={() => props.remove()}
                    className="flex-1 transition-all hover:bg-green-200 hover:text-xl hover:cursor-pointer"
                >
                    None
                </div>
            </div>
        </div>
    );
}

export default ProductCategoriesBar;
