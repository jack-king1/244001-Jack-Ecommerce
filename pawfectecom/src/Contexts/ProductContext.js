import { useContext, useEffect, useState, createContext } from "react";
import Product from "../Model/Product.js";
import { getProducts } from "../API/AzureAPI.js";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [allProducts, setAllProducts] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);
    const [eventListeners, setEventListeners] = useState({});
    //
    useEffect(() => {
        LoadProducts();
    }, []);

    //emit event that all products have loaded.

    useEffect(() => {
        console.log("Loaded products", allProducts);
        emit("productsLoaded", allProducts);
    }, [allProducts]);

    //Retrive a product with the selected ID.
    function SelectProduct(id) {
        console.log("Fetching id: ", id);
        for (const product of allProducts) {
            if (product.id == id) {
                return product;
            }
        }
        return null;
    }

    async function LoadProducts() {
        console.log("@LoadAsync...");
        let data = await getProducts();
        console.log("Fetched Data: ", data);
        let newProductArray = [];
        for (let newProd of data.recordset) {
            console.log("Item: ", newProd);
            newProductArray.push(
                new Product(
                    newProd.product_id,
                    newProd.fk_category_size_id,
                    newProd.fk_category_type_id,
                    newProd.product_name,
                    newProd.product_desc,
                    newProd.image_url,
                    newProd.price,
                    newProd.sale_percentage > 0
                )
            );
        }
        console.log("@NewProductArrayMap: ", newProductArray);
        setAllProducts(newProductArray);
    }

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

    const productContextValue = {
        allProducts,
        setAllProducts,
        SelectProduct,
        subscribe,
    };

    return (
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
