import { Outlet, Link } from "react-router-dom";

import Navbar from "./Navbar.js";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;
