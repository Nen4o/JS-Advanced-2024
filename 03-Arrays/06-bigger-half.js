function solve(input = []) {
    /**
     * You are given an array of numbers. 
     * Write a JS function that sorts the array in ascending order and returns a new array,
     * containing only the second half of the input. 
     * If there is an odd number of elements in the input, always take the bigger half. 
     * For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3
     */
    let halfArrayIndex = input.length / 2;
    let halfArray = input.sort((a, b) => a - b).slice(halfArrayIndex);

    return halfArray;
}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);