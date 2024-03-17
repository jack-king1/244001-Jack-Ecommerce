import Basket from "../Model/Basket";
import { BasketItem } from "../Model/Basket";
import { SelectProduct } from "../Model/Product";
import { testProduct } from "../Model/Product";

//unit test for the basket.js functions
describe("Basket", () => {
    //Unit test that checks total amount against expected amount.
    describe("CalculateTotal", () => {
        it("Calcualte total basket to correct two decimals", () => {
            let basketItemsList = [
                new BasketItem(SelectProduct(3), 4),
                new BasketItem(SelectProduct(6), 3),
            ];
            let basketInstance = new Basket(basketItemsList);
            let basketSumTotalDecimal =
                basketInstance.CalculateTotal(basketItemsList);
            expect(basketSumTotalDecimal).toBe(231.93);
        });
    });

    //Unit test to check return type is a number from total cart value.
    describe("CalculateTotalType", () => {
        it("Check return type of CalculateTotal in basket.js to be type number", () => {
            let basketItemsList = [
                new BasketItem(SelectProduct(3), 4),
                new BasketItem(SelectProduct(6), 3),
            ];
            let basketInstance = new Basket(basketItemsList);
            let basketSumTotalDecimal =
                basketInstance.CalculateTotal(basketItemsList);

            let returnType = typeof basketSumTotalDecimal;
            expect(returnType).toBe("number");
        });
    });
});
