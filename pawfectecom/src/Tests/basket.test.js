import { BasketItem, Basket } from "../Model/Basket";
import { SelectProduct } from "../Model/Product";

describe("Basket", () => {
    describe("CalculateTotal", () => {
        it("Calcualte total basket to correct two decimals", () => {
            let basketItemsList = [
                new BasketItem(SelectProduct(3, 4)),
                new BasketItem(SelectProduct(6, 3)),
            ];
            let basketInstance = new Basket(basketItemsList);
            let basketSumTotalDecimal =
                basketInstance.CalculateTotal(basketItemsList);
            expect(basketSumTotalDecimal).toBe(231.93);
        });
    });
});
