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
        "large",
        "round",
        "Premium Round Bed",
        "a round bed ideal for larger cats and luxurious comfort!",
        "./Images/Products/catbedtest.png",
        37.99
    ),
    new Product(
        2,
        "small",
        "flat",
        "Deluxe Flat Cat Bed",
        "a sleek flat bed designed for small spaces and cozy naps!",
        "./Images/Products/catbedtest.png",
        40.99
    ),
    new Product(
        3,
        "large",
        "round",
        "Elegant Round Cat Bed",
        "a stylish round bed perfect for pampering your feline friend!",
        "./Images/Products/catbedtest.png",
        43.99
    ),
    new Product(
        4,
        "small",
        "flat",
        "Cozy Small Flat Bed",
        "a snug flat bed tailored for small cats seeking comfort!",
        "./Images/Products/catbedtest.png",
        46.99
    ),
    new Product(
        5,
        "large",
        "round",
        "Luxury Round Cat Bed",
        "an opulent round bed that spells luxury for your cat's naptime!",
        "./Images/Products/catbedtest.png",
        49.99
    ),
    new Product(
        6,
        "small",
        "flat",
        "Compact Flat Bed",
        "a space-saving flat bed suitable for compact living spaces!",
        "./Images/Products/catbedtest.png",
        52.99
    ),
    new Product(
        7,
        "large",
        "round",
        "Plush Round Cat Bed",
        "a plush round bed providing ultimate comfort for your cat's nap!",
        "./Images/Products/catbedtest.png",
        55.99
    ),
    new Product(
        8,
        "small",
        "flat",
        "Chic Small Flat Bed",
        "a chic flat bed that complements modern home decor!",
        "./Images/Products/catbedtest.png",
        58.99
    ),
    new Product(
        9,
        "large",
        "round",
        "Glamorous Round Cat Bed",
        "a glamorous round bed for cats who appreciate a touch of elegance!",
        "./Images/Products/catbedtest.png",
        61.99
    ),
];

export { allproducts };
