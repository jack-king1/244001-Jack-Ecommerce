import {
    BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import ProductPage from "./Components/Pages/ProductPage";
import CategoryPage from "./Components/Pages/CategoryPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/productpage" element={<ProductPage />} />
                    <Route path="/category" element={<CategoryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
