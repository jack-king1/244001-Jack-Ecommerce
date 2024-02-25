import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { SelectProduct } from "../../Model/Product";
import { IoIosCloseCircle } from "react-icons/io";
import useWindowDimensions from "../../Model/ScreenDimensions";

function Checkout() {
    const userContext = useContext(UserContext);
    const [quantity, setQuantity] = useState(1);
    //The id and count of each product id {id, count}
    const { height, width } = useWindowDimensions();
    const [rerenderToggle, setRerenderToggle] = useState(false);

    //This use state will hold an array of objects which include product and qty of that item.
    const [finalCheckOutItemObjectList, setFinalCheckoutItemObjectList] =
        useState([]);

    //once basketList has been loaded, create objects of product and qty ready to display in checkout.
    useEffect(() => {
        let productsList = [];
        productsList = userContext.userBasket.getBasketItems();
        console.log("Checkout Products: ", productsList);
        setFinalCheckoutItemObjectList(productsList);
    }, []);

    function EditCart(productId, value) {
        userContext.userBasket.EditCartQty(
            productId,
            UpdateDisplay,
            value,
            userContext.emit
        );
    }

    function Remove(productId) {
        userContext.userBasket.RemoveItem(
            productId,
            UpdateDisplay,
            userContext.emit
        );
    }

    function UpdateDisplay() {
        let productsList = [];
        productsList = userContext.userBasket.getBasketItems();
        console.log("Checkout Products: ", productsList);
        setFinalCheckoutItemObjectList(productsList);
        setRerenderToggle(!rerenderToggle);
    }

    function QuantitySelector(productid, qty) {
        return (
            <div className="flex flex-row mt-2 gap-2">
                <div
                    id="quantity"
                    className="flex flex-row w-14 md:w-28 border border-gray-600"
                >
                    <div
                        className="flex-1 flex w-6 h-6 md:w-8 md:h-8 text-center items-center justify-center transition-all hover:cursor-pointer hover:bg-red-100"
                        onClick={() => EditCart(productid, -1)}
                    >
                        <div
                            className={`text-xl ${
                                qty <= 1 ? "font-thin" : "font-bold"
                            }`}
                        >
                            -
                        </div>
                    </div>
                    <div className="flex-1 flex w-6 h-6 md:w-8 md:h-8 text-center items-center justify-center">
                        <div>{qty}</div>
                    </div>
                    <div
                        className="flex-1 flex w-6 h-6 md:w-8 md:h-8 text-center items-center justify-center hover:cursor-pointer hover:bg-green-100"
                        onClick={() => EditCart(productid, 1)}
                    >
                        <div className="font-bold text-xl">+</div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className=" p-4 w-screen md:w-2/3 flex flex-col justify-center items-start md:items-start md:mx-auto">
            <div className="text-3xl">Your Basket</div>
            <div className="flex flex-col w-full ">
                {finalCheckOutItemObjectList.map((product, index) => {
                    return (
                        <div
                            className="w-full flex flex-row border border-black border-opacity-20 gap-2 p-2"
                            key={index}
                        >
                            <div>
                                <img
                                    className="h-20 max-w-20 md:h-40 md:max-w-40"
                                    src={product.product.image}
                                ></img>
                            </div>
                            <div className="flex-1 m-auto">
                                <div className="flex-1 flex-flex-col">
                                    <div className="font-bold md:text-xl">
                                        {product.product.productname}
                                    </div>
                                    <div className="text-sm">
                                        {product.product.description}
                                    </div>
                                    <div className="font-bold">
                                        Qty: {product.qty}
                                    </div>
                                    {width < 768 && (
                                        <div className="mt-auto">
                                            {QuantitySelector(
                                                product.product.id,
                                                product.qty
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {width > 768 && (
                                <div className="mt-auto">
                                    {QuantitySelector(
                                        product.product.id,
                                        product.qty
                                    )}
                                </div>
                            )}

                            <div className="flex flex-col justify-between items-end min-w-20">
                                <IoIosCloseCircle
                                    onClick={() => Remove(product.product.id)}
                                    className="text-2xl text-red-500 transition-all hover:text-red-700 hover:scale-105 hover:cursor-pointer"
                                />
                                <div className="flex mt-auto text-green-500 font-bold md:text-2xl">
                                    £{product.product.GetPriceQty(product.qty)}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="w-full flex flex-row items-center border border-black border-opacity-20 gap-2 p-2 justify-between ">
                    <div>Total:</div>
                    <div className="text-2xl md:text-4xl">
                        £
                        {userContext.userBasket.CalculateTotal(
                            finalCheckOutItemObjectList
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
