function solve(input = []) {

    let previousArray = [];
    let count = 0;

    input.forEach(element => {

        for (let i = 0; i <= element.length - 1; i++) {
            if (element[i] === previousArray[i]) {
                count++;
            }
            if (element[i] === element[i + 1]) {
                count++;
            }
        }
        previousArray = element;
    });
    //console.log(count);
    return count;
}
solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);

solve([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]);