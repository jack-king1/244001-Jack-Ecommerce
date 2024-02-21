import React from "react";

function Banner(props) {
    return (
        <div className="h-16 bg-secondary flex justify-center items-center">
            <div className="text-white font-bold drop-shadow-lg">
                {props.text}
            </div>
        </div>
    );
}

export default Banner;
