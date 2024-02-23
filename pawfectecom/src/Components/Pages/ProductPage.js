import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { testProduct } from "../../Model/Product";
import useWindowDimensions from "../../Model/ScreenDimensions";
import { AiOutlineSafety } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { GetFiftyPercentOff } from "../../Model/HelperFunctions";
import { useParams } from "react-router";

function ProductPage() {
    const userContext = useContext(UserContext);
    const { height, width } = useWindowDimensions();
    const [product, setProduct] = useState(testProduct);
    const [quantity, setQuantity] = useState(1);
    const params = useParams();

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
                    onClick={() => userContext.userBasket.Additem(params.id)}
                    className="flex-1 flex items-center justify-center bg-orange-500 rounded transition-all hover:cursor-pointer hover:scale-105"
                >
                    <div className="text-white font-bold">Buy Now</div>
                </div>
            </div>
        );
    }

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
                        </div>{" "}
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
                        {product.highlights.map((item, index) => {
                            return <li className="ml-6">{item}</li>;
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
                        <div className="line-through">£{product.price}</div>
                    </div>
                ) : (
                    <div className="flex flex-row gap-3 items-center">
                        <div className="flex flex-row line-through text-black text-lg">
                            £{product.price}
                        </div>
                        <div className="flex flex-row  text-red-500 text-3xl animate-pulse">
                            £{GetFiftyPercentOff(product.price)}
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
                    <div className="flex-1 bg-red-500">
                        <img className="w-full" src={product.image}></img>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex flex-row items-center gap-4">
                            <div className="text-3xl">
                                {"/" + product.productname}
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
            {width < 768 ? MobileLayout() : DesktopLayout()}
        </div>
    );
}

export default ProductPage;
