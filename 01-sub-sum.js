function solve(arrayInput = [], firstIndex, secondIndex) {

    if (Array.isArray(arrayInput)) {
        let sum = 0;
        if (firstIndex < 0) {
            firstIndex = 0;
        }
        if (secondIndex > arrayInput.length - 1) {
            secondIndex = arrayInput.length - 1;
        }
        let sumArray = arrayInput.slice(firstIndex, secondIndex + 1);

        for (let i = 0; i < sumArray.length; i++) {
            if (typeof sumArray[i] != "number") {
                return NaN;
            }
            sum += sumArray[i];
        }
        return sum;
    } else {
        return NaN;
    }
}
let res = solve([], 1, 2);

console.log(res);