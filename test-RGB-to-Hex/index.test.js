import { rgbToHexColor } from "../RGB-to-Hex.js";
import { describe } from "mocha";
import { expect } from "chai";

describe('Test', () => {
    it('Should return undefined from float numbers', () => {
        expect(rgbToHexColor(1.1, 2, 3)).to.be.undefined;
        expect(rgbToHexColor(1, 2.1, 3)).to.be.undefined;
        expect(rgbToHexColor(1, 2, 3.4)).to.be.undefined;

        expect(rgbToHexColor(2, 1)).to.be.undefined;
    })
    it('Should return undefined if numbers is out of range',()=>{
        let lowRange = -1;
        let bigRange = 256;

        expect(rgbToHexColor(lowRange, 1, 2)).to.be.undefined;
        expect(rgbToHexColor(bigRange, 1, 2)).to.be.undefined;
        expect(rgbToHexColor(1, lowRange, 2)).to.be.undefined;
        expect(rgbToHexColor(1, bigRange, 2)).to.be.undefined;
        expect(rgbToHexColor(1, 1, lowRange)).to.be.undefined;
        expect(rgbToHexColor(1, 1, bigRange)).to.be.undefined;

        expect(rgbToHexColor(lowRange, lowRange, lowRange)).to.be.undefined;
        expect(rgbToHexColor(bigRange, bigRange, bigRange)).to.be.undefined;


    })
    it('Should return undefined if parameters is not same type',()=>{
        expect(rgbToHexColor([], 1, 2)).to.be.undefined;
        expect(rgbToHexColor(1, [], 2)).to.be.undefined;
        expect(rgbToHexColor(1, 1, [])).to.be.undefined;
        expect(rgbToHexColor(undefined, 1, 2)).to.be.undefined;
        expect(rgbToHexColor(1, undefined, 2)).to.be.undefined;
        expect(rgbToHexColor(1, 1, undefined)).to.be.undefined;
        expect(rgbToHexColor(true, 1, 2)).to.be.undefined;
        expect(rgbToHexColor(1, true, 2)).to.be.undefined;
        expect(rgbToHexColor(1, 1, true)).to.be.undefined;

        expect(rgbToHexColor('dsa','dsa','das')).to.be.undefined;

        expect(rgbToHexColor([],'2', {})).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;

    })
    it('Should return string', ()=>{
        expect(rgbToHexColor(1, 1, 1)).to.equal('#010101');
        expect(rgbToHexColor(34, 12, 75)).to.equal('#220C4B');

        expect(rgbToHexColor(1, 1, 1)).to.include('#');;
        expect(rgbToHexColor(1, 1, 1)).to.be.string;
    })
})