function solve(array) {
    let previousRowSum = 0;
    let previousColSum = 0;

    let isMagicCount = 0;
    let isNotMagicCount = 0;

    let horizontalSum = 0;
    let verticalSum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            horizontalSum += array[i][j];
            verticalSum += array[j][i];
        }

        if (previousRowSum == horizontalSum && previousColSum == verticalSum) {
            isMagicCount++;
        } else {
            isNotMagicCount++;
        }

        previousRowSum = horizontalSum;
        previousColSum = verticalSum;

        horizontalSum = 0;
        verticalSum = 0;
    }

    if (isMagicCount > isNotMagicCount) {
        console.log('true');
    } else {
        console.log('false');
    }
}

solve([[1, 1, 1],
[1, 4, 3],
[2, 2, 7]])

solve([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]])

