function encodeAndDecodeMessages() {
    let container = document.getElementById('container');
    let textArias = container.querySelectorAll('textarea');
    let buttons = container.querySelectorAll('button');

    let encodeTextArea = textArias[0];
    let decodeTextArea = textArias[1];

    let encodeBtn = buttons[0];
    let decodeBtn = buttons[1];

    encodeBtn.addEventListener('click', () => {
        let message = encodeTextArea.value;
        let newMessage = '';

        for (let i = 0; i < message.length; i++) {
            let asciNum = message.charCodeAt(i);
            let changedLetter = asciNum += 1;
            newMessage += String.fromCharCode(changedLetter)
        }

        decodeTextArea.value = newMessage;
        encodeTextArea.value = '';
    })

    decodeBtn.addEventListener('click', () => {
        let encodeMessage = decodeTextArea.value;
        let decodeMessage = '';

        for (let i = 0; i < encodeMessage.length; i++) {
            let asciNum = encodeMessage.charCodeAt(i);
            let changedLetter = asciNum -= 1;
            decodeMessage += String.fromCharCode(changedLetter)
        }
        decodeTextArea.value = decodeMessage;
    })
}