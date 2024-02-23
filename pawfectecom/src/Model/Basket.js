export default class Basket {
    constructor() {
        //items is the array that holds all the item ids currently in basket.
        this.items = ["temp item"];
    }

    //calculate total value of items taking into account sale price/amount.
    CalculateBasketTotal() {
        return 0;
    }

    //Return an array with products grouped into ids for stacks of items.
    GetBasketSorted() {}

    /**
     * Add item to basket
     * @param {*} productID
     */
    AddItem(productID) {
        console.log("adding item to basket! ItemID: ", productID);
    }

    //remove item from basket
    RemoveItem() {}

    /**
     * get size of basket.
     * @returns items.length
     */
    GetSize() {
        return this.items.length;
    }
}
