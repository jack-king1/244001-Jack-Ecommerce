import { useContext, useEffect, useState, createContext } from "react";
import Basket from "../Model/Basket";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userBasket, setUserBasket] = useState(new Basket());
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log("User basket updated: ", userBasket);
        userBasket.CalculateTotalTestOne();
    }, [userBasket]);

    function UpdateBasket(newBasket) {
        setUserBasket(newBasket);
    }

    const userContextValue = {
        loggedIn,
        user,
        userBasket,
        UpdateBasket,
    };
    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
