export class Category {
    constructor(categoryname, description, image) {
        this.categoryname = categoryname;
        this.description = description;
        this.image = image;
    }
}

const categories = [
    new Category(
        "Small",
        "Small beds for your adorabable kitten!",
        "./Image/kitten.png"
    ),
    new Category(
        "Medium",
        "Small beds for your adorabable kitten!",
        "./Image/kitten.png"
    ),
    new Category(
        "Large",
        "Small beds for your adorabable kitten!",
        "./Image/kitten.png"
    ),
];

export { categories };
