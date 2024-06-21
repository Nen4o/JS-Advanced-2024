function solve() {
  let textInput = document.getElementById('input');
  let sentencesArray = textInput.value.split('.');
  let outputHolder = document.getElementById('output');

  if (sentencesArray.length <= 3) {
    let paragraph = document.createElement('p');
    paragraph.textContent = sentencesArray.join('.');
    outputHolder.appendChild(paragraph);
  } else {
    let firstP = document.createElement('p');
    let lastP = document.createElement('p');
    
    for (let i = 0; i < sentencesArray.length; i++) {
      if (i < 3) {
        firstP.textContent += sentencesArray[i] + '.';
      }

      lastP.textContent = sentencesArray[sentencesArray.length - 2];
    }

    outputHolder.append(firstP)
    outputHolder.append(lastP);
  }
}