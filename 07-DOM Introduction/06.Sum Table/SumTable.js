function sumTable() {
    let prises = document.getElementsByTagName('td');
    let totalSum = document.getElementById('sum');
    let sum = 0;

    for(let i = 0; i < prises.length; i++){
        if(i % 2 !== 0){
            sum += Number(prises[i].textContent);
        }
    }
    totalSum.textContent = sum;
}