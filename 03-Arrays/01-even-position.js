function solve(input = []) {

    //Write a function that finds the elements at even positions in an array.
    
    let result = [];
    input.filter((el, index) => {
        if (index % 2 == 0) {
            result.push(el);
        }
    })
    console.log(result.join(' '));
}
solve(['20', '30', '40', '50', '60']);