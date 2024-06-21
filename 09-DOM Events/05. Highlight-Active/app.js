function focused() {
    const elementContainer = document.querySelector('div');
    const divElements = elementContainer.querySelectorAll('div');

    for (const element of divElements) {
        const input = element.querySelector('input');

        input.addEventListener('click', onClick)
    }

    function onClick(event) {
        const parentElement = event.currentTarget.parentElement;
        parentElement.classList.add('focused');

        for (const element of divElements) {
            if(parentElement != element){
                element.removeAttribute('class');
            }
        }   
    }
}