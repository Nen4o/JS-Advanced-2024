function solve(input = []) {

    /**You are given an array of numbers. 
     *Write a JS function that returns the elements at odd positions from the array, 
     doubled and in reverse order. 
     
     The output is the return on the console on a single line, separated by space
    */
    let result = [];

    input.filter((element, index) => {
        if (index % 2 !== 0) {
            element *= 2;
            result.unshift(element);
        }
    })
    return result.join(' ');

}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);