import { CATEGORY_TYPE } from "./Category.js";
import { RoundToTwoDecimal } from "../Helper/HelperFunctions.js";
export default class Product {
    constructor(
        id,
        size,
        category,
        productname,
        description,
        image,
        price,
        onsale,
        highlights
    ) {
        this.id = id;
        this.size = size;
        this.category = category;
        this.productname = productname;
        this.description = description;
        this.image = image;
        this.price = price;
        this.onsale = onsale;
        this.highlights = highlights;
    }

    /**
     * returns price for sale or non sale to 2 decimal places floored.
     * @returns price
     */
    GetPrice() {
        let halfprice = Math.floor((this.price * 100) / 2) / 100;
        let normalPrice = Math.floor(this.price * 100) / 100;
        if (this.onsale) return halfprice;
        else return normalPrice;
    }

    /**
     * return total row item cost for given quantity of item with sale or no sale price.
     * @param {*} qty
     * @returns
     */
    GetPriceQty(qty) {
        if (this.onsale) {
            return parseFloat(RoundToTwoDecimal(this.GetPrice() * qty)).toFixed(
                2
            );
        } else {
            let price = (Math.floor(this.price * 100) * qty) / 100;
            return parseFloat(price).toFixed(2);
        }
    }
}

const allproducts = [
    new Product(
        1,
        CATEGORY_TYPE.SMALL,
        CATEGORY_TYPE.FLAT,
        "Basic Flat Bed",
        "a flat bed perfect for any cat and place!",
        "/Images/Products/catbedtest.png",
        34.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        2,
        CATEGORY_TYPE.MEDIUM,
        CATEGORY_TYPE.CAVE,
        "Paw Cave Bed",
        "a round bed ideal for larger cats and luxurious comfort!",
        "/Images/Products/bedcave.jpg",
        37.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        3,
        CATEGORY_TYPE.MEDIUM,
        CATEGORY_TYPE.CAVE,
        "Deluxe Cave Cat Bed",
        "a sleek flat bed designed for small spaces and cozy naps!",
        "/Images/Products/boxbed.jpg",
        40.99,
        true,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        4,
        CATEGORY_TYPE.LARGE,
        CATEGORY_TYPE.DONUT,
        "Round Cat Bed",
        "a stylish round bed perfect for pampering your feline friend!",
        "/Images/Products/catbed2.png",
        43.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        5,
        "small",
        "flat",
        "Cozy Small Lifted Bed",
        "a snug flat bed tailored for small cats seeking comfort!",
        "/Images/Products/catwindow.png",
        46.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        6,
        CATEGORY_TYPE.LARGE,
        CATEGORY_TYPE.DONUT,
        "Oval Cave bed",
        "an opulent round bed that spells luxury for your cat's naptime!",
        "/Images/Products/catcave.jpg",
        49.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        7,
        CATEGORY_TYPE.SMALL,
        CATEGORY_TYPE.FLAT,
        "Compact Flat Bed",
        "a space-saving flat bed suitable for compact living spaces!",
        "/Images/Products/circlebed.jpg",
        52.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        8,
        CATEGORY_TYPE.LARGE,
        CATEGORY_TYPE.WINDOW,
        "Hanging Window Bed",
        "a plush round bed providing ultimate comfort for your cat's nap!",
        "/Images/Products/windowhammockbed.jpg",
        55.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        9,
        CATEGORY_TYPE.SMALL,
        CATEGORY_TYPE.FLAT,
        "Soft Tunnel Bed",
        "a chic flat bed that complements modern home decor!",
        "/Images/Products/tunnelbed.jpg",
        58.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        10,
        CATEGORY_TYPE.SMALL,
        CATEGORY_TYPE.DONUT,
        "Spotty Bed",
        "a glamorous round bed for cats who appreciate a touch of elegance!",
        "/Images/Products/spottybed.jpg",
        61.99,
        true,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        11,
        CATEGORY_TYPE.SMALL,
        CATEGORY_TYPE.CAVE,
        "Chic Cave Bed",
        "a chic flat bed that complements modern home decor!",
        "/Images/Products/babybed.jpg",
        58.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
    new Product(
        12,
        CATEGORY_TYPE.XLARGE,
        CATEGORY_TYPE.WINDOW,
        "Cannopy Bed",
        "a glamorous round bed for cats who appreciate a touch of elegance!",
        "/Images/Products/canopybed.jpg",
        61.99,
        false,
        [
            "The must have for minimalists",
            "Easy to clean and machine washable!",
            "Comes with a free cleaning brush and deoderizor.",
            "Made of 100% cotton!",
        ]
    ),
];

//Retrive a product with the selected ID.
function SelectProduct(id) {
    console.log("Fetching id: ", id);
    for (const product of allproducts) {
        if (product.id == id) {
            return product;
        }
    }
    return null;
}

const testProduct = new Product(
    69,
    "large",
    "round",
    "Cannopy Bed",
    "a glamorous round bed for cats who appreciate a touch of elegance!",
    "/Images/Products/canopybed.jpg",
    61.99,
    true,
    [
        "The must have for minimalists",
        "Easy to clean and machine washable!",
        "Comes with a free cleaning brush and deoderizor.",
        "Made of 100% cotton!",
    ]
);

const testProduct2 = new Product(
    69,
    "large",
    "round",
    "Cannopy Bed",
    "a glamorous round bed for cats who appreciate a touch of elegance!",
    "/Images/Products/canopybed.jpg",
    100.79,
    false,
    [
        "The must have for minimalists",
        "Easy to clean and machine washable!",
        "Comes with a free cleaning brush and deoderizor.",
        "Made of 100% cotton!",
    ]
);

export { allproducts, testProduct, testProduct2, SelectProduct };
