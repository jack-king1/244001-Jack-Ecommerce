export class Product {
    constructor(id, size, category, productname, description, image, price) {
        this.id = id;
        this.size = size;
        this.category = category;
        this.productname = productname;
        this.description = description;
        this.image = image;
        this.price = price;
    }
}

const allproducts = [
    new Product(
        0,
        "small",
        "flat",
        "Basic Flat Bed",
        "a flat bed perfect for any cat and place!",
        "./Images/Products/catbedtest.png",
        34.99
    ),
    new Product(
        1,
        "medium",
        "cave",
        "Premium Round Bed",
        "a round bed ideal for larger cats and luxurious comfort!",
        "./Images/Products/bedcave.jpg",
        37.99
    ),
    new Product(
        2,
        "medium",
        "cave",
        "Deluxe Flat Cat Bed",
        "a sleek flat bed designed for small spaces and cozy naps!",
        "./Images/Products/boxbed.jpg",
        40.99
    ),
    new Product(
        3,
        "large",
        "round",
        "Elegant Round Cat Bed",
        "a stylish round bed perfect for pampering your feline friend!",
        "./Images/Products/catbed2.png",
        43.99
    ),
    new Product(
        4,
        "small",
        "flat",
        "Cozy Small Flat Bed",
        "a snug flat bed tailored for small cats seeking comfort!",
        "./Images/Products/catwindow.png",
        46.99
    ),
    new Product(
        5,
        "large",
        "round",
        "Luxury Round Cat Bed",
        "an opulent round bed that spells luxury for your cat's naptime!",
        "./Images/Products/catcave.jpg",
        49.99
    ),
    new Product(
        6,
        "small",
        "flat",
        "Compact Flat Bed",
        "a space-saving flat bed suitable for compact living spaces!",
        "./Images/Products/circlebed.jpg",
        52.99
    ),
    new Product(
        7,
        "large",
        "round",
        "Plush Round Cat Bed",
        "a plush round bed providing ultimate comfort for your cat's nap!",
        "./Images/Products/windowhammockbed.jpg",
        55.99
    ),
    new Product(
        8,
        "small",
        "flat",
        "Chic Small Flat Bed",
        "a chic flat bed that complements modern home decor!",
        "./Images/Products/tunnelbed.jpg",
        58.99
    ),
    new Product(
        9,
        "large",
        "round",
        "Glamorous Round Cat Bed",
        "a glamorous round bed for cats who appreciate a touch of elegance!",
        "./Images/Products/spottybed.jpg",
        61.99
    ),
    new Product(
        8,
        "small",
        "flat",
        "Chic Small Flat Bed",
        "a chic flat bed that complements modern home decor!",
        "./Images/Products/babybed.jpg",
        58.99
    ),
    new Product(
        9,
        "large",
        "round",
        "Glamorous Round Cat Bed",
        "a glamorous round bed for cats who appreciate a touch of elegance!",
        "./Images/Products/canopybed.jpg",
        61.99
    ),
];

export { allproducts };
