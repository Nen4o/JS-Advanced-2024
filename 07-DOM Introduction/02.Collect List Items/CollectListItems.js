function extractText() {
    let list = document.getElementById('items').textContent;
    let textAria = document.getElementById('result');
    textAria.value = list;
}