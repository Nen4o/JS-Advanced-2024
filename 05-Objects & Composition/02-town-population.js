function solve(input = []) {
    let result = {};
    for (const element of input) {
        let editedElement = element.split(' <-> ');
        if (!result[editedElement[0]]) {
            result[editedElement[0]] = 0;
        }
        result[editedElement[0]] += Number(editedElement[1]);
    }

    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}
solve(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])