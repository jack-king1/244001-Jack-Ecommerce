import React from "react";
import { useNavigate } from "react-router-dom";

//a category button that on click will navigate the user to give category e.g. ../LargeProducts
function CategoryButton(props) {
    const navigate = useNavigate();
    return (
        <div
            //  Create a category button component here
            onClick={() => {
                navigate("/products", { state: { category: props.info.type } });
            }}
            className="hover:scale-[105%] hover:cursor-pointer transition-all"
        >
            <div className="h-40 w-40 md:h-64 md:w-64 rounded-xl">
                <img className="rounded-xl" src={props.info.image}></img>
            </div>
            {
                <div className="text-center font-bold text-lg md:text-2xl">
                    {props.info.categoryname}
                </div>
            }
        </div>
    );
}

export default CategoryButton;
