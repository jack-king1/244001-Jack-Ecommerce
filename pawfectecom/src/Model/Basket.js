export default class Basket {
    constructor() {
        //items is the array that holds all the item ids currently in basket.
        this.items = [];
    }

    //calculate total value of items taking into itemount sale price/amount.
    CalculateBasketTotal() {
        return 0;
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
