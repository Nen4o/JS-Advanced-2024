function solve(array) {

    let result = [];
    let length = array.length;
    array.sort((a, b) => a - b);

    for (let i = 0; i < length; i++) {
        if (i % 2 == 0) {
            result.push(array.shift());
        } else {
            result.push(array.pop())
        }
    }
    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])