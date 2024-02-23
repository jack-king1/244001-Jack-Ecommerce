import { RoundToTwoDecimal } from "./HelperFunctions";
import { unitTestProduct } from "./Product";

export default class Basket {
    constructor() {
        //items is the array that holds all the item ids currently in basket.
        this.items = [];
    }

    //calculate total value of items taking into itemount sale price/amount in the entire basket
    /**
     * Receives a js object and returns the total cost of the object array.
     * @param {*} checkoutItems
     * @returns
     */
    CalculateTotal(checkoutItems) {
        let totalCost = 0;

        checkoutItems.map((item, index) => {
            console.log("Checkout list: ", item.product.GetPrice());
            totalCost += RoundToTwoDecimal(item.product.GetPrice() * item.qty);
        });

        return parseFloat(totalCost).toFixed(2);
    }

    //Unit Tests
    //Test to se if output is a number and not any other type.
    CalculateTotalAbsTestTwo() {
        let expectedOutput = "number";
        let productList = [{ product: unitTestProduct, qty: 3 }];
        let total = this.CalculateTotal(productList);
        console.assert(
            typeof total == expectedOutput,
            "Error! Calculation not working!",
            typeof total
        );
    }

    CalculateTotalTestOne() {
        let expectedTotal = 300;
        let productList = [{ product: unitTestProduct, qty: 3 }];
        let total = this.CalculateTotal(productList);
        console.assert(
            expectedTotal == total,
            "Error! Calculation not working!"
        );
        this.CalculateTotalAbsTestTwo();
    }

    //Return an array with products grouped into ids for stacks of items.
    GetBasketSorted() {
        const grouped = this.items.reduce((item, obj) => {
            const key = obj.id;
            if (!item[key]) {
                item[key] = 0;
            }
            item[key]++;
            return item;
        }, {});
        console.log("Sorted Basket: ", grouped);
        return grouped;
    }

    /**
     * Add item to basket
     * @param {*} productID
     */
    AddItem(productID, callback) {
        this.items.push({ id: productID });
        console.log("Calling event: updateBasket");
        callback("basketUpdate", this.items.length);
    }
    /**
     * get size of basket.
     * @returns items.length
     */
    GetSize() {
        return this.items.length;
    }
}
