function solve() {
    let exercise = document.getElementById('exercise');
    let exerciseTableRows = exercise.querySelectorAll('tbody tr');

    let buttons = exercise.querySelectorAll('tfoot button');
    let checkBtn = buttons[0];
    let clearBtn = buttons[1];

    let exerciseTable = exercise.querySelector('table');
    let checkDiv = document.getElementById('check');
    let textParagraph = checkDiv.querySelector('p');

    checkBtn.addEventListener('click', checkSodomo);
    clearBtn.addEventListener('click', clearSodomo);

    function checkSodomo() {
        let numbers = [];

        for (const tableRow of exerciseTableRows) {
            let tableData = tableRow.children;
            let dataNumbers = [];
            for (const data of tableData) {
                dataNumbers.push(data.querySelector('input').value);
            }
            numbers.push(dataNumbers);
        }

        let previousArray = [];

        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[0]);
            console.log(numbers[numbers.length - 1]);

            for (let j = 0; j < numbers[i].length; j++) {
  
                if (numbers[i][j] == previousArray[j] || numbers[i][j] == numbers[i][j - 1] || numbers[0][j] == numbers[numbers.length - 1][j]) {
                    textParagraph.textContent = 'NOP! You are not done yet...';
                    textParagraph.style.color = 'red';
                    exerciseTable.style.border = '2px solid red';
                    return;
                } else {
                    textParagraph.textContent = 'You solve it! Congratulations!';
                    textParagraph.style.color = 'green';
                    exerciseTable.style.border = '2px solid green';
                }
            }
            previousArray = numbers[i];
        }
    }

    function clearSodomo() {
        for (const tableRow of exerciseTableRows) {
            let tableData = tableRow.children;
            for (const data of tableData) {
                let info = data.querySelector('input');
                info.value = '';
                textParagraph.textContent = '';
                exerciseTable.style.border = '';
            }
        }
    }

}