function solve(...input) {
    let numOfTypes = {};

    for (const element of input) {
        let type = typeof element;
        console.log(`${type}: ${element}`);

        if (!numOfTypes[type]) {
            numOfTypes[type] = 0;
        }
        numOfTypes[type]++;
    }

    let sortable = [];
    for (const key in numOfTypes) {
        sortable.push([key, numOfTypes[key]])
    }
    sortable.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < sortable.length; i++) {
        for (let j = 0; j < sortable[i].length; j += 2) {
            console.log(`${sortable[i][j]} = ${sortable[i][j + 1]}`);
        }
    }
}
solve({ name: 'bob' }, 3.333, 9.999, 'das', 'das')