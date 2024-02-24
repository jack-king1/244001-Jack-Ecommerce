import { RoundToTwoDecimal } from "./HelperFunctions";
import { Product, SelectProduct, unitTestProduct } from "./Product";

export class BasketItem {
    constructor(product, qty) {
        this.product = product;
        this.qty = qty;
    }
}

export default class Basket {
    constructor() {
        //items is the array that holds all the item ids currently in basket.
        this.basketItems = [];
    }

    getBasketItems() {
        return this.basketItems;
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
        const grouped = this.basketItems.reduce((item, obj) => {
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
    AddItem(productID, callback, qty) {
        //loop through basket items to find if product already exists, if yes just add to qty, if no add new product to list.
        let itemFound = false;
        for (const item of this.basketItems) {
            if (item.product.id == productID) {
                //product exisits, add to qty.
                item.qty += qty;
                itemFound = true;
            }
        }

        //No item with given id was found, add new basketItem.
        if (!itemFound) {
            this.basketItems.push(
                new BasketItem(SelectProduct(productID), qty)
            );
        }

        console.log("Calling event: updateBasket");
        callback("basketUpdate", this.GetSize()); //change this to a function which goes through all basket items and tallys total.
    }

    /**
     * get size of basket.
     * @returns items.length
     */
    GetSize() {
        //change to loop through all basket items and get total qty of all items.
        let size = 0;
        for (const basketItem of this.basketItems) {
            size += basketItem.qty;
        }
        return size;
    }
}
