import {expect, it} from "vitest";

interface IAmount {
    amount: number
}

type TAmount =
    | IAmount
    | number

const coerceAmount = (amount: TAmount) => {
    return typeof amount === 'number'
        ? amount
        : amount.amount
};


it("Should return the amount when passed an object", () => {
    expect(coerceAmount({amount: 20})).toEqual(20);
});

it("Should return the amount when passed a number", () => {
    expect(coerceAmount(20)).toEqual(20);
});
