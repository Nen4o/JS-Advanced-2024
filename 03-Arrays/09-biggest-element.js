function solve(input = []) {
    //Write a function that finds the biggest element inside a matrix.
    let biggestNumbersArray = [];

    for (const array of input) {
        array.sort((a, b) => b - a);
        biggestNumbersArray.push(array[0]);
    }

    biggestNumbersArray.sort((a, b) => b - a);
    let biggestNumber = biggestNumbersArray[0];

    return biggestNumber;
}
solve([[20, 50, 10],
[8, 33, 145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])