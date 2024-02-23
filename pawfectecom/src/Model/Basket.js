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
            totalCost += item.product.GetPrice() * item.qty;
        });
        totalCost.toFixed(2);
        return totalCost;
    }

    //Unit Tests
    CalculateTotalTestOne() {
        console.log("PLEASE WORK!");
        let expectedTotal = 400;
        let productList = [{ product: unitTestProduct, qty: 3 }];
        let total = this.CalculateTotal(productList);
        console.assert(
            expectedTotal != total,
            "Error! Calculation not working!"
        );
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
        callback(this);
    }
    /**
     * get size of basket.
     * @returns items.length
     */
    GetSize() {
        return this.items.length;
    }
}
