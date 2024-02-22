import React from "react";
import { FaCaretDown } from "react-icons/fa";

function CategoryHeader(props) {
    return (
        <div className="flex flex-row justify-center items-center my-4 md:text-4xl md:my-10">
            <div>{props.text}</div>
            <div>
                <FaCaretDown className="text-secondary text-xl md:text-4xl" />
            </div>
        </div>
    );
}

export default CategoryHeader;
