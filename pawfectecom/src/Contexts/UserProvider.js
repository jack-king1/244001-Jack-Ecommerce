import { useContext, useEffect, useState, createContext } from "react";
import Basket from "../Model/Basket";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userBasket, setUserBasket] = useState(new Basket());
    const [loggedIn, setLoggedIn] = useState(false);
    const [eventListeners, setEventListeners] = useState({});

    useEffect(() => {
        console.log("User basket updated: ", userBasket);
        userBasket.CalculateTotalTestOne();
    }, [userBasket]);

    useEffect(() => {
        console.log("Event Listeners: ", eventListeners);
    }, [eventListeners]);

    // Function to subscribe to an event
    const subscribe = (eventName, callback) => {
        setEventListeners((prevListeners) => ({
            ...prevListeners,
            [eventName]: [...(prevListeners[eventName] || []), callback],
        }));
        console.log("Subscribed to: ", eventName);
    };

    //calls all subsribed functions
    const emit = (eventName, payload) => {
        console.log("All Listeners: ", eventListeners);
        const listeners = eventListeners[eventName] || [];
        console.log("Calling all subs!", listeners);
        listeners.forEach((callback) => callback(payload));
    };

    const userContextValue = {
        loggedIn,
        user,
        userBasket,
        subscribe,
        emit,
    };
    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
