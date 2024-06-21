function solve(input = []) {
    //Write a function that prints the two smallest elements from an array of numbers.

    input.sort((a, b) => a - b);
    let smallestNumbers = input.slice(0, 2).join(' ');
    console.log(smallestNumbers);
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);