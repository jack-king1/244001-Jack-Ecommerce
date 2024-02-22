export class Product {
    constructor(id, category, productname, description, image, price) {
        this.id = id;
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
        "./Images/Products/flatbed.jpg",
        34.99
    ),
];
