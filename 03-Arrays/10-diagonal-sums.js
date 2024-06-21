function solve(input = []) {

    /*
    A square matrix of numbers comes as an array of arrays, each array holding numbers. 
    Write a function that finds the sum at the main and the secondary diagonals.
    */

    let arrayLength = input.length - 1;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        firstDiagonalSum += input[i][i];
    }

    for (let i = 0; i <= input.length - 1; i++) {
        for (let j = arrayLength; j >= arrayLength; j--) {
            //console.log('j- ' + j);
            secondDiagonalSum += input[i][j];
        }
        arrayLength--;
    }

    console.log(firstDiagonalSum + ' ' + secondDiagonalSum);

}
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])