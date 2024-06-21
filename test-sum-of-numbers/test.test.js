import { describe } from "mocha";
import { sum } from "../sum-of-numbers.js";
import { expect } from "chai";

describe('Tests', () => {
    it('Should return sum of all numbers in array', () => {
        let inputArr = [1, 2, 3];
        let expectedRes = 6;
        let realResult = sum(inputArr);

        expect(realResult).to.equal(expectedRes);
    })
})