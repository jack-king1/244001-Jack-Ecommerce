import { useContext, useEffect, useState, createContext } from "react";
import Basket from "../Model/Basket.js";
import { unitTestProduct } from "../Model/Product.js";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userBasket, setUserBasket] = useState(new Basket());
    const [loggedIn, setLoggedIn] = useState(false);
    const [eventListeners, setEventListeners] = useState({});

    //trigger unit tests.
    useEffect(() => {
        unitTestProduct.GetPriceUnitTest(50.0, true);
        unitTestProduct.GetTypeOfPriceUnitTest("number");
        userBasket.CalculateTotalPriceUnitTest();
    }, []);

    //call unit tests on basket.
    useEffect(() => {
        console.log("User basket updated: ", userBasket);
        userBasket.CalculateTotalPriceUnitTest();
    }, [userBasket]);

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

    //object that contains al items needed for export params in one place.
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
