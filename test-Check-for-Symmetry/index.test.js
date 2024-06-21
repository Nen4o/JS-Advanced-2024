import { expect } from "chai";
import { isSymmetric } from "../Check-for-Symmetry.js";
import { describe } from "mocha";


describe('Tets', () => {
    it('Should pass', () => {
        expect(true).to.be.true;
    })
    it('Should return true if the input array is symmetric', () => {
        let arr = [1, 2, 1];
        
        expect(isSymmetric(arr)).to.be.true;
    })
    it('Should take an array as an argument', ()=>{
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric()).to.be.false;
    })

    it('Should reverse all array values', ()=>{
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
        expect(isSymmetric([true, false, true])).to.be.true;
    })
    it('Should return true if argument is array',()=>{
        expect(isSymmetric([])).to.be.true;
    })
    it('Should return false if array is not symmetric', ()=>{
        expect(isSymmetric([1, 2, 3])).to.be.false;
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    })
})