export class Category {
    constructor(categoryname, description, image) {
        this.categoryname = categoryname;
        this.description = description;
        this.image = image;
    }
}

const sizecategories = [
    new Category(
        "Small",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
    new Category(
        "Medium",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
    new Category(
        "Large",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
    new Category(
        "Extra Large",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
];

const stylecategories = [
    new Category(
        "Flat",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
    new Category(
        "Hooded/Cave",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
    new Category(
        "Donut",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
    new Category(
        "Window Perch",
        "Small beds for your adorabable kitten!",
        "./Images/smallcategorypink.png"
    ),
];

export { sizecategories, stylecategories };
