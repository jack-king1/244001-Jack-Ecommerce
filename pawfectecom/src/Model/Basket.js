import { RoundToTwoDecimal } from "./HelperFunctions.js";
import { SelectProduct } from "./Product.js";
import Product from "./Product.js";

//the basket item class is used to store multiple items in one row in checkout. product & qty
export class BasketItem {
    constructor(product, qty) {
        this.product = product;
        this.qty = qty;
    }
}

//general basket class which holds add, remove, edit, calculate total functions
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
        totalCost = parseFloat(totalCost).toFixed(2);

        //reparse to float here as .toFixed returns a string type.
        return parseFloat(totalCost);
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
        callback("basketUpdate", {
            count: this.GetSize(),
            message: "Item Added",
        }); //change this to a function which goes through all basket items and tallys total.
    }

    //Update cart qty in checkout with given qty and callback to update navbar basket count
    EditCartQty(productID, callback, qty, navbarcallback) {
        let msg = "";
        if (qty > 0) {
            msg = "Item Added";
        } else {
            msg = "Item Removed";
        }
        for (const item of this.basketItems) {
            if (item.product.id == productID) {
                //product exisits, add to qty.
                if (item.qty + qty >= 1) {
                    item.qty += qty;
                }
            }
        }
        //callback("basketUpdate", this.GetSize()); //change this to a function which goes through all basket items and tallys total.
        callback();
        navbarcallback("basketUpdate", { count: this.GetSize(), message: msg });
    }

    //Remove given item from basket and callback to update navbar basket count
    RemoveItem(productID, navbarcallback, callback) {
        let index = 0;
        for (const item of this.basketItems) {
            if (item.product.id == productID) {
                this.basketItems.splice(index, 1); // 2nd parameter means remove one item only
                callback("basketUpdate", {
                    count: this.GetSize(),
                    message: "Item(s) Removed",
                }); //change this to a function which goes through all basket items and tallys total.
            }
            index++;
        }
        navbarcallback();
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
