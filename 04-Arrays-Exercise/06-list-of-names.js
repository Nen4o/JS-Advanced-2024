function solve(inputArray = []) {

    inputArray.sort((a, b) => a.localeCompare(b))

    inputArray.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    })
}
solve(["John",

    "Bob",

    "Christina",

    "Ema"])