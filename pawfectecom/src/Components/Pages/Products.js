import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductCategoriesBar from "../ProductCategoriesBar.js";
import { UserContext } from "../../Contexts/UserProvider.js";
import { ProductContext } from "../../Contexts/ProductContext.js";

//layout inspo https://www.harrys.com/en/gb/products/dynamic-skin-care-duo/?selected=12331922
function Products() {
    const productContext = useContext(ProductContext);
    const userContext = useContext(UserContext);
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [renderFlag, setRenderFlag] = useState(false);

    useEffect(() => {
        productContext.subscribe("productsLoaded", setProducts);
    }, []);

    useEffect(() => {
        console.log("Products set from event: ", products);
        if (productContext.allProducts != undefined) {
            setProducts(productContext.allProducts);
        }
    }, []);

    useEffect(() => {
        console.log("Selected Category: ", location);
        if (location.state != null) {
            filterProducts(location.state.category);
        }
    }, [location]);

    function filterProducts(type) {
        // function checkType(product) {
        //     return product.category == type;
        // }
        // const result = allproducts.filter(checkType);
        // //console.log("Filtered: ", result);
        // setProducts(result);
    }

    function removeFilter() {
        //setProducts(allproducts);
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <ProductCategoriesBar
                action={filterProducts}
                remove={removeFilter}
            />
            <div className="flex justify-center items-center">
                <div className="flex text-black grid-cols-2 grid w-full gap-4 m-2 md:w-1/2 md:grid-cols-4">
                    {products != null ? (
                        products.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() =>
                                        navigate(`/product/${product.id}`)
                                    }
                                    className="flex flex-col justify-center items-center rounded transition-all drop-shadow-lg bg-white border border-black border-opacity-20 p-2 hover:scale-105 hover:cursor-pointer"
                                >
                                    <img
                                        className="rounded"
                                        src={product.image}
                                    ></img>
                                    <div
                                        className="text-gray-700 text-center
"
                                    >
                                        {product.productname}
                                    </div>
                                    <div
                                        className="text-gray-950 text-center font-medium flex gap-2 items-center
"
                                    >
                                        {product.onsale ? (
                                            <div className="text-red-500 font-bold text-lg">
                                                £
                                                {product.GetPrice(
                                                    product.price
                                                )}
                                            </div>
                                        ) : null}
                                        <div
                                            className={`${
                                                product.onsale
                                                    ? "line-through"
                                                    : ""
                                            }`}
                                        >
                                            £{product.price}
                                        </div>
                                    </div>
                                    <div
                                        //Navigate to given product id and pass in via props the product ID.
                                        onClick={() =>
                                            navigate(`/product/${product.id}`, {
                                                state: { id: product.id },
                                            })
                                        }
                                        className="w-1/2 h-6 overflow-hidden bg-orange-500 font-bold text-center text-white rounded hover:cursor-pointer hover:animate-pulse"
                                    >
                                        Buy Now
                                    </div>
                                    {product.onsale ? (
                                        <div className="absolute bg-red-500 w-24 h-10 rounded-r-xl left-0 top-0 animate-pulse flex items-center justify-center">
                                            <div className="text-white font-bold">
                                                50% Off!
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })
                    ) : (
                        <div className="mx-auto flex-1">Loading...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;
