import {
    BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import Layout from "./Components/Layout.js";
import Home from "./Components/Pages/Home.js";
import Products from "./Components/Pages/Products.js";
import ProductPage from "./Components/Pages/ProductPage.js";
import Checkout from "./Components/Pages/Checkout.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/productpage" element={<ProductPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
