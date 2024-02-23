export default class Basket {
    constructor() {
        this.items = ["poo"];
    }

    //calculate total value of items taking into account sale price/amount.
    CalculateBasketTotal() {
        return 0;
    }

    //Return an array with products grouped into ids for stacks of items.
    GetBasketSorted() {}

    //Add item to basket
    AddItem(productID) {
        console.log("adding item to basket! ItemID: ", productID);
    }

    //remove item from basket
    RemoveItem() {}

    //get size of basket.
    GetSize() {
        return this.items.length;
    }
}
