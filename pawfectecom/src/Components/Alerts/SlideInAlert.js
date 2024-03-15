import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserProvider";

//An overlay that subscribes to user events to display messages about messages to cart.
function SlideInAlert() {
    const [isVisible, setIsVisible] = useState(false);
    const userContext = useContext(UserContext);
    const [message, setMessage] = useState("");

    //subscribe to even inside userContext on mount.
    useEffect(() => {
        userContext.subscribe("basketUpdate", TriggerAnimation);
    }, []);

    //function callback for event trigger.
    function TriggerAnimation(itemAdded) {
        setMessage(itemAdded.message);
        setIsVisible(true);
        setTimeout(function () {
            setIsVisible(false);
        }, 4000);
    }

    return (
        <div
            className={`flex items-center fixed pointer-events-none h-20 z-50 -top-2 left-1/2 w-screen transition-all duration-[1500ms] ${
                isVisible
                    ? "transform translate-y-0"
                    : "transform -translate-y-full"
            }`}
        >
            <div className="bg-primary text-white text-xl font-bold p-8 rounded-lg w-3/4 md:w-1/4 -translate-x-1/2 text-center">
                {message}
            </div>
        </div>
    );
}

export default SlideInAlert;
