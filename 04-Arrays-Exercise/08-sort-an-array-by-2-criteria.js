function solve(array) {

    array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(array.join('\n'));
}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])