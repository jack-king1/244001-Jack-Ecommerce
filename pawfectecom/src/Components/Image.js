import React from "react";

function Image(props) {
    return (
        <div className="w-full">
            <img className="w-full" src={props.url}></img>
        </div>
    );
}

export default Image;
