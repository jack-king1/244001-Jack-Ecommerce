import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { SelectProduct } from "../../Model/Product";

function Checkout() {
    const userContext = useContext(UserContext);

    //The id and count of each product id {id, count}
    const [basketList, setBasketList] = useState(
        userContext.userBasket.GetBasketSorted()
    );

    //This use state will hold an array of objects which include product and qty of that item.
    const [finalCheckOutItemObjectList, setFinalCheckoutItemObjectList] =
        useState([]);

    //once basketList has been loaded, create tuples of product and qty ready to display in checkout.
    useEffect(() => {
        let productsList = [];
        const keys = Object.keys(basketList);
        const mappedKeys = keys.map((key) => {
            productsList.push({
                product: SelectProduct(key),
                qty: basketList[key],
            });
            return key;
        });
        console.log("Checkout Products: ", productsList);
        setFinalCheckoutItemObjectList(productsList);
    }, [basketList]);

    return (
        <div className=" p-4 w-screen md:w-2/3 flex flex-col justify-center items-start md:items-start md:mx-auto">
            <div className="text-3xl">Your Basket</div>
            <div className="flex flex-col w-full ">
                {finalCheckOutItemObjectList.map((product, index) => {
                    return (
                        <div
                            className="w-full flex flex-row items-center border border-black border-opacity-20 gap-2 p-2"
                            key={index}
                        >
                            <div>
                                <img
                                    className="h-20 max-w-20 md:h-40 md:max-w-40"
                                    src={product.product.image}
                                ></img>
                            </div>
                            <div className="flex-1">
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
                                </div>
                            </div>
                            <div className="flex mt-auto text-green-500 font-bold md:text-2xl">
                                £{product.product.GetPriceQty(product.qty)}
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
