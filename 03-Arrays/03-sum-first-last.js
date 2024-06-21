function solve(input = []) {
    //Write a function that calculates and returns the sum of the first and the last elements in an array.

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[input.length - 1]);

    return firstNumber + lastNumber;
}

solve(['20', '30', '40']);