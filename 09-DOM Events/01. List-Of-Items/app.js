function addItem() {
    let itemsHolder = document.getElementById('items');
    let newText = document.getElementById('newItemText');
    let newItemLi = document.createElement('li');

    newItemLi.textContent = newText.value;
    console.log(newItemLi);
    itemsHolder.appendChild(newItemLi);
}