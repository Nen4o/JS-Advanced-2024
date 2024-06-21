function addItem() {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.value = itemValue.value;
    option.textContent = itemText.value;
    menu.appendChild(option);

    itemText.value = '';
    itemValue.value = '';

}