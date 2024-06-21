function addItem() {
    let items = document.getElementById('items');
    let inputText = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    let a = document.createElement('a');

    liElement.textContent = inputText.value;
    a.href = '#';
    a.textContent = '[Delete]';
    a.addEventListener('click', deleteElement);

    liElement.append(a);
    items.append(liElement);

    inputText.value = '';

    function deleteElement(event){
        event.currentTarget.parentElement.remove();
        console.log();
    }
}