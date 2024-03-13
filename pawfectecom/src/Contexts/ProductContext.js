import { useContext, useEffect, useState, createContext } from "react";
import Basket from "../Model/Basket";
import { Product } from "../Model/Product";
import { unitTestProduct } from "../Model/Product";
import { getProducts } from "../API/AzureAPI";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);

    //
    useEffect(() => {
        async function LoadProducts() {
            let prods = await getProducts();
            console.log(prods);
            setProducts(prods);
        }
        //LoadProducts();
    }, []);

    useEffect(() => {
        console.log("Loaded products", products);
    }, [products]);

    const productContextValue = {
        products,
    };
    return (
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
