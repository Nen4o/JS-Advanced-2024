function solve(arrayInput = [], startIndexString, lastIndexString) {

    /**
     * Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings.
     * The result of the function should be a new array, containing a section of the original array, 
     * starting at the first flavor parameter,
     * and ending at (and including) the second flavor parameter
     */
    let firstIndex = arrayInput.indexOf(startIndexString);
    let lastIndex = arrayInput.indexOf(lastIndexString);

    let result = arrayInput.slice(firstIndex, lastIndex + 1);

    return result;
}
solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')