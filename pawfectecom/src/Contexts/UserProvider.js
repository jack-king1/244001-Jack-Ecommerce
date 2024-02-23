import { useContext, useEffect, useState, createContext } from "react";
import Basket from "../Model/Basket";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userBasket, setUserBasket] = useState(new Basket());
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log(userBasket);
    }, [userBasket]);

    const userContextValue = {
        loggedIn,
        user,
        userBasket,
    };
    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
