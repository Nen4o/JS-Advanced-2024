function add(num) {
    let sum = num;
    function calc(num1) {
        sum += num1;
        return calc;
    }

    calc.toString = function () {
        return sum;
    }
    return calc;
}

let res = add(1);
console.log(res);