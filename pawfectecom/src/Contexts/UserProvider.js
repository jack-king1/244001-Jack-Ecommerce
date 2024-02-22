import { useContext, useEffect, useState, createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userCart, setUserCart] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
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
