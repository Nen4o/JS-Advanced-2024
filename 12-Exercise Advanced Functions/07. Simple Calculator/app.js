function calculator() {
    let firstNum;
    let secondNum;
    let resultOutput;

    return {
        init,
        add,
        subtract,
    }

    function init(num1, num2, result) {
        firstNum = document.querySelector(num1);
        secondNum = document.querySelector(num2);
        resultOutput = document.querySelector(result);
    }

    function add() {
        let sum = Number(firstNum.value) + Number(secondNum.value);
        resultOutput.value = new Error('Hello world!');
    }

    function subtract() {
        let sum = Number(firstNum.value) - Number(secondNum.value);
        resultOutput.value = sum;
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




