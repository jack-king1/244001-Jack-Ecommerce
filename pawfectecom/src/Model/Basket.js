export default class Basket {
    constructor() {
        this.items = [];
    }

    //calculate total value of items taking into account sale price/amount.
    CalculateBasketTotal() {
        return 0;
    }

    //Return an array with products grouped into ids for stacks of items.
    GetBasketSorted() {}

    //Add item to basket
    AddItem() {}

    //remove item from basket
    RemoveItem() {}

    //get size of basket.
    GetBasketSize() {
        return this.items.length;
    }
}
