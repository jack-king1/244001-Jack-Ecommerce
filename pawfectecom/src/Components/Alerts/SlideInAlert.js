import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserProvider";

function SlideInAlert() {
    const [isVisible, setIsVisible] = useState(false);
    const userContext = useContext(UserContext);

    useEffect(() => {
        userContext.subscribe("basketUpdate", TriggerAnimation);
    }, []);

    function TriggerAnimation() {
        setIsVisible(true);
        setTimeout(function () {
            setIsVisible(false);
        }, 1500);
    }

    return (
        <div
            className={`fixed pointer-events-none z-50 flex justify-end top-1/4 -right-0 w-2/5 transition-transform duration-[1500ms] ${
                isVisible
                    ? "transform -translate-x-0"
                    : "transform translate-x-full"
            }`}
        >
            <h1 className="bg-red-500 text-white rounded-l text-xl font-bold p-4">
                Item Added
            </h1>
        </div>
    );
}

export default SlideInAlert;
