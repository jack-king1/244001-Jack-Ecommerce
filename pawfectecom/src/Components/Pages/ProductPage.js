import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { SelectProduct, testProduct } from "../../Model/Product";
import useWindowDimensions from "../../Model/ScreenDimensions";
import { AiOutlineSafety } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { RoundToTwoDecimal } from "../../Model/HelperFunctions";
import { useParams } from "react-router";
import { getProduct } from "../../API/AzureAPI";
import { getProductHighlights } from "../../API/AzureAPI";
import { getProducts } from "../../API/AzureAPI";
import { Product } from "../../Model/Product";

function ProductPage() {
    const userContext = useContext(UserContext);
    const { height, width } = useWindowDimensions();
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const [highlights, setHighlights] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/products/${params.id}/highlights`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             let arrayHighlights = [];
    //             for (let highlight of data.recordset) {
    //                 console.log("New Highlight: ", highlight.highlight_text);
    //                 arrayHighlights.push(highlight.highlight_text);
    //             }
    //         });
    // }, [product]);

    useEffect(() => {
        console.log(params);
        setProduct(SelectProduct(params.id));
        // console.log("fetching data");
        // //fetch data for product and highlights
        // try {
        //     fetch(`http://localhost:3001/products/${params.id}`)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log("product data: ", data);
        //             let productid = data.recordset[0].product_id;
        //             let productname = data.recordset[0].product_name;
        //             let productprice = data.recordset[0].price;
        //             let productondesc = data.recordset[0].product_desc;
        //             let salepercentage = data.recordset[0].sale_percentage;
        //             let sizeid = data.recordset[0].fk_category_size_id;
        //             let typeid = data.recordset[0].fk_category_type_id;
        //             let productimage = "/Images/Products/canopybed.jpg";
        //             let onSale = salepercentage > 0.01;
        //             let newproduct = new Product(
        //                 productid,
        //                 sizeid,
        //                 typeid,
        //                 productname,
        //                 productondesc,
        //                 productimage,
        //                 productprice,
        //                 onSale,
        //                 []
        //             );
        //             setProduct(newproduct);
        //             console.log(newproduct);
        //         });
        // } catch (err) {
        //     console.log(err);
        // }

        //fetch highlight data for product
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
