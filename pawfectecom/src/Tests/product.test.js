import { testProduct, testProduct2 } from "../Model/Product";

describe("Product", () => {
    //Unit test that checks total amount against expected amount.
    describe("GetProductPriceHalfPrice", () => {
        it("Return correct price for a test product", () => {
            let testPrice = testProduct.GetPrice();
            expect(testPrice).toBe(30.99);
        });
    });

    //Unit test that checks total amount against expected amount.
    describe("GetProductPrice", () => {
        it("Return correct price for a test product", () => {
            let testPrice = testProduct.GetPrice();
            expect(testPrice).toBe(30.99);
        });
    });
});
