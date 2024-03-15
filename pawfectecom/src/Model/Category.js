//category of products, ca=lass will contain all information about a given category.
export class Category {
    constructor(categoryname, type, description, image) {
        this.categoryname = categoryname;
        this.type = type;
        this.description = description;
        this.image = image;
    }
}

//all category types for products, products can have 1 or more of these types.
export const CATEGORY_TYPE = {
    DONUT: 1,
    FLAT: 2,
    CAVE: 3,
    WINDOW: 4,
    SMALL: 5,
    MEDIUM: 6,
    LARGE: 7,
    XLARGE: 8,
};

const sizecategories = [
    new Category(
        "Small",
        CATEGORY_TYPE.SMALL,
        "Small beds for your adorabable kitten!",
        "./Images/smallcategory1.png"
    ),
    new Category(
        "Medium",
        CATEGORY_TYPE.MEDIUM,
        "Small beds for your adorabable kitten!",
        "./Images/mediumcategory1.png"
    ),
    new Category(
        "Large",
        CATEGORY_TYPE.LARGE,
        "Small beds for your adorabable kitten!",
        "./Images/largecategory1.png"
    ),
    new Category(
        "Extra Large",
        CATEGORY_TYPE.XLARGE,
        "Small beds for your adorabable kitten!",
        "./Images/xlargecategory1.png"
    ),
];

const stylecategories = [
    new Category(
        "Flat",
        CATEGORY_TYPE.FLAT,
        "Small beds for your adorabable kitten!",
        "./Images/flatstyle.png"
    ),
    new Category(
        "Cave",
        CATEGORY_TYPE.CAVE,
        "Small beds for your adorabable kitten!",
        "./Images/cavestyle.png"
    ),
    new Category(
        "Donut",
        CATEGORY_TYPE.DONUT,
        "Small beds for your adorabable kitten!",
        "./Images/donutstyle.png"
    ),
    new Category(
        "Window",
        CATEGORY_TYPE.WINDOW,
        "Small beds for your adorabable kitten!",
        "./Images/windowstyle.png"
    ),
];

export { sizecategories, stylecategories };
