function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let textArray = text.split(' ');
  let resultArray = [];

  if (namingConvention == 'Camel Case') {
    for (let i = 1; i < textArray.length; i++) {
      textArray[0] = textArray[0].toLowerCase();
      resultArray[0] = textArray[0];

      textArray[i] = textArray[i].toLowerCase();
      let bigCharacter = textArray[i][0].toUpperCase();

      resultArray.push(textArray[i].replace(textArray[i][0], bigCharacter))
    }
    result.textContent = resultArray.join('');

  } else if (namingConvention == 'Pascal Case') {
    for (let i = 0; i < textArray.length; i++) {
      textArray[i] = textArray[i].toLowerCase();
      let bigCharacter = textArray[i][0].toUpperCase();

      resultArray.push(textArray[i].replace(textArray[i][0], bigCharacter))
    }
    result.textContent = resultArray.join('');
  }else{
    result.textContent = 'Error!';
  }
}