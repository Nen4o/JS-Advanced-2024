function solve() {
  const exercise = document.getElementById('exercise');

  const textAreas = exercise.querySelectorAll('textarea');
  const buttons = exercise.querySelectorAll('button');

  const tbody = exercise.querySelector('tbody');

  const inputListTextArea = textAreas[0];
  const resultTextArea = textAreas[1];

  const generateBtn = buttons[0];
  const buyBtn = buttons[1];

  generateBtn.addEventListener('click', () => {
    let jsonInput = inputListTextArea.value;
    let inputObject = JSON.parse(jsonInput);

    for (const object of inputObject) {
      const tableRow = document.createElement('tr');

      const imgTableData = document.createElement('td');
      const img = document.createElement('img');
      img.src = object.img;
      imgTableData.append(img);
      tableRow.append(imgTableData);

      const nameTableData = document.createElement('td');
      const paragraphName = document.createElement('p');
      paragraphName.textContent = object.name;
      nameTableData.append(paragraphName);
      tableRow.append(nameTableData);

      const priceTableData = document.createElement('td');
      const paragraphPrice = document.createElement('p');
      paragraphPrice.textContent = object.price;
      priceTableData.append(paragraphPrice);
      tableRow.append(priceTableData);

      const decorationFactorTableData = document.createElement('td');
      const decorationFactorParagraph = document.createElement('p');
      decorationFactorParagraph.textContent = object.decFactor;
      decorationFactorTableData.append(decorationFactorParagraph);
      tableRow.append(decorationFactorTableData);

      const checkBoxTableData = document.createElement('td');
      const checkBoxInput = document.createElement('input');
      checkBoxInput.type = 'checkbox';
      checkBoxTableData.append(checkBoxInput);
      tableRow.append(checkBoxTableData);

      tbody.append(tableRow);
    }
  })

  buyBtn.addEventListener('click', () => {
    let furnitureDataRows = tbody.querySelectorAll('tr');

    let names = [];
    let totalPrice = 0;
    let decorationFactor = 0;
    let checked = 0;
    for (const dataRow of furnitureDataRows) {
      let dataRowChildren = dataRow.children;
      if (dataRowChildren[4].querySelector('input').checked){
        checked++;
        names.push(dataRowChildren[1].textContent);
        totalPrice += Number(dataRowChildren[2].textContent);
        decorationFactor += Number(dataRowChildren[3].textContent);
      }
    }

    resultTextArea.value +='Bought furniture: ' + names.join(', ') + '\n';
    resultTextArea.value += `Total price: ${totalPrice.toFixed(2)}` + '\n';
    resultTextArea.value += `Average decoration factor: ${decorationFactor / checked}`;
  })

}