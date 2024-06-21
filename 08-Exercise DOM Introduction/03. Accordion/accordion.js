function toggle() {
    let buttonText = document.getElementsByClassName('button')[0];
    let content = document.getElementById('extra');

    if (buttonText.textContent== 'More') {
        buttonText.textContent = 'Less';

        content.style.display = 'block';

    } else if (buttonText.textContent == 'Less') {
        buttonText.textContent = 'More';

        content.style.display = 'none';
    }
}