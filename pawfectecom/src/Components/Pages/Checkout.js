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
    }, [basketList]);

    return (
        <div className=" p-4 w-screen md:w-2/3 flex flex-col justify-center items-start">
            <div className="text-3xl">Your Basket</div>
            <div className="flex flex-col "></div>
        </div>
    );
}

export default Checkout;
