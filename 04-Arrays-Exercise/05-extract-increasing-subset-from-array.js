function solve(array = []) {

    let result = [];
    let biggestNum = 0;

    for (const element of array) {

        if (element >= biggestNum) {
            result.push(element);
            biggestNum = element;
        }
    }
    return result;
}
let res = solve([1, 3, 8, 4, 10, 12, 12, 3, 2, 24]);
console.log(res);