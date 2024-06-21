function solve(array = [], rotateTimes) {

    let result = [];
    let length = array.length;

    for (let i = 1; i <= rotateTimes; i++) {
        let lastEl = array.pop(array.length - 1);
        result.unshift(lastEl);

        if (array.length == 0) {
            array = result;
        }
    }

    result = result.concat(array);

    if (result.length > length) {
        console.log(result.slice(length).join(' '));
    } else {
        console.log(result.join(' '));
    }
}
solve(['1',
    '2',
    '3',
    '4'], 2)


solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);