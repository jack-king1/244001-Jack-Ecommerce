export class Category {
    constructor(categoryname, type, description, image) {
        this.categoryname = categoryname;
        this.type = type;
        this.description = description;
        this.image = image;
    }
}

export const STYLE_TYPE = {
    DONUT: 0,
    FLAT: 1,
    CAVE: 2,
    WINDOW: 3,
};

export const SIZE_TYPE = {
    SMALL: 0,
    MEDIUM: 1,
    LARGE: 2,
    XLARGE: 3,
};

const sizecategories = [
    new Category(
        "Small",
        SIZE_TYPE.SMALL,
        "Small beds for your adorabable kitten!",
        "./Images/smallcategory1.png"
    ),
    new Category(
        "Medium",
        SIZE_TYPE.MEDIUM,
        "Small beds for your adorabable kitten!",
        "./Images/mediumcategory1.png"
    ),
    new Category(
        "Large",
        SIZE_TYPE.LARGE,
        "Small beds for your adorabable kitten!",
        "./Images/largecategory1.png"
    ),
    new Category(
        "Extra Large",
        SIZE_TYPE.XLARGE,
        "Small beds for your adorabable kitten!",
        "./Images/xlargecategory1.png"
    ),
];

const stylecategories = [
    new Category(
        "Flat",
        STYLE_TYPE.FLAT,
        "Small beds for your adorabable kitten!",
        "./Images/flatstyle.png"
    ),
    new Category(
        "Cave",
        STYLE_TYPE.CAVE,
        "Small beds for your adorabable kitten!",
        "./Images/cavestyle.png"
    ),
    new Category(
        "Donut",
        STYLE_TYPE.DONUT,
        "Small beds for your adorabable kitten!",
        "./Images/donutstyle.png"
    ),
    new Category(
        "Window",
        STYLE_TYPE.WINDOW,
        "Small beds for your adorabable kitten!",
        "./Images/windowstyle.png"
    ),
];

export { sizecategories, stylecategories };
