import { useContext, useEffect, useState, createContext } from "react";
import Basket from "../Model/Basket";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userCart, setUserCart] = useState(new Basket());
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log(userCart);
    }, [userCart]);

    const userContextValue = {
        loggedIn,
        user,
        userCart,
    };
    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
