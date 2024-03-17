import { useContext, useEffect, useState } from "react";

import { AiOutlineSafety } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { useParams } from "react-router";
import {
    getProductHighlights,
    getProducts,
    getProduct,
} from "../../API/AzureAPI.js";
import Product from "../../Model/Product.js";
import useWindowDimensions from "../../Model/ScreenDimensions.js";
import { UserContext } from "../../Contexts/UserProvider.js";

function ProductPage() {
    const userContext = useContext(UserContext);
    const { height, width } = useWindowDimensions();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        console.log(params);
        //fetch async from db rather than local products
        async function LoadProduct() {
            console.log("Loading product id ", params.id);
            let loadProd = await getProduct(params.id);
            let loadHighlights = await getProductHighlights(params.id);
            console.log("Highlights: ", loadHighlights);
            let newHighlights = [];
            for (let hl of loadHighlights.recordset) {
                newHighlights.push(hl.highlight_text);
            }
            let newProd = new Product(
                loadProd.recordset[0].product_id,
                loadProd.recordset[0].fk_category_size_id,
                loadProd.recordset[0].fk_category_type_id,
                loadProd.recordset[0].product_name,
                loadProd.recordset[0].product_desc,
                loadProd.recordset[0].image_url,
                loadProd.recordset[0].price,
                loadProd.recordset[0].sale_percentage > 0
            );
            console.log("Product Loaded: ", newProd);
            setProduct(newProd);
            setHighlights(newHighlights);
        }
        LoadProduct();
    }, []);

    function BuySection() {
        return (
            <div className="flex flex-row mt-2 gap-2">
                <div
                    id="quantity"
                    className="flex flex-row w-28 border border-gray-600"
                >
                    <div
                        className="flex-1 flex w-12 h-12 text-center items-center justify-center transition-all hover:cursor-pointer hover:bg-red-100"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                        <div
                            className={`text-xl ${
                                quantity <= 1 ? "font-thin" : "font-bold"
                            }`}
                        >
                            -
                        </div>
                    </div>
                    <div className="flex-1 flex w-12 h-12 text-center items-center justify-center">
                        <div>{quantity}</div>
                    </div>
                    <div
                        className="flex-1 flex w-12 h-12 text-center items-center justify-center hover:cursor-pointer hover:bg-green-100"
                        onClick={() => setQuantity(Math.max(1, quantity + 1))}
                    >
                        <div className="font-bold text-xl">+</div>
                    </div>
                </div>
                <div
                    onClick={() =>
                        userContext.userBasket.AddItem(
                            product.id,
                            userContext.emit,
                            quantity
                        )
                    }
                    className="flex-1 flex items-center justify-center bg-orange-500 rounded transition-all hover:cursor-pointer hover:scale-105"
                >
                    <div className="text-white font-bold">Buy Now</div>
                </div>
            </div>
        );
    }

    //under section which add trustworthyness to website.
    function CustomerSatisfaction() {
        return (
            <div className="mt-4">
                <div className="flex flex-row items-center gap-2">
                    <div>
                        <FaTruck />
                    </div>
                    <div>Free Uk delivery on orders over £50</div>
                </div>
                <div className="mt-2">
                    <div className="flex flex-row items-center gap-2">
                        <div>
                            <AiOutlineSafety />
                        </div>
                        <div className="font-bold">Quality Guarentee</div>
                    </div>
                    <div className="ml-8">
                        Not 100% happy? Return within 30 days for full refund!
                    </div>
                </div>
            </div>
        );
    }

    function HighlightsSection() {
        return (
            <div className="bg-green-100 p-3 rounded mt-4">
                <div className="text-xl">Why your cat will love it</div>
                <div>
                    <ul className="list-disc mt-2">
                        {highlights.map((item, index) => {
                            return (
                                <li key={index} className="ml-6">
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    function ProductPrice() {
        return (
            <div className="flex flex-row">
                {!product.onsale ? (
                    <div className="flex flex-row">
                        <div className="">£{product.price}</div>
                    </div>
                ) : (
                    <div className="flex flex-row gap-3 items-center">
                        <div className="flex flex-row line-through text-black text-lg">
                            £{product.price}
                        </div>
                        <div className="flex flex-row  text-red-500 text-3xl animate-pulse">
                            £{product.GetPrice(product.price)}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    function MobileLayout() {
        return (
            <div className="w-5/6 flex flex-col ">
                <div className="text-3xl">{product.productname}</div>
                <div className="text-2xl text-primary">{ProductPrice()}</div>
                <img src={product.image}></img>
                <div className="">{product.description}</div>
                {BuySection()}
                {HighlightsSection()}
                {CustomerSatisfaction()}
            </div>
        );
    }

    function DesktopLayout() {
        return (
            <div className="w-2/3 flex flex-col text-black">
                <div className="flex flex-row w-100 gap-4">
                    <div className="flex-1">
                        <img className="w-full" src={product.image}></img>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex flex-row items-center gap-4">
                            <div className="text-3xl">
                                {product.productname}
                            </div>
                            <div className="text-3xl">|</div>
                            <div className="text-primary text-4xl font-bold">
                                {ProductPrice()}
                            </div>
                        </div>
                        {HighlightsSection()}
                        {BuySection()}
                        {CustomerSatisfaction()}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center h-screen w-full md:flex-row mt-8 md:justify-center md:items-start">
            {product != null ? (
                width < 768 ? (
                    MobileLayout()
                ) : (
                    DesktopLayout()
                )
            ) : (
                <svg
                    class="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                ></svg>
            )}
        </div>
    );
}

export default ProductPage;
