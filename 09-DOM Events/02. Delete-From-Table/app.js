function deleteByEmail() {
    let customersTable = document.querySelectorAll('#customers tbody tr');
    let inputText = document.querySelector('input');
    let result = document.getElementById('result');

    for (const rowData of customersTable) {
        let info = rowData.querySelectorAll('td');

        for (const data of info) {
             if (data.textContent == inputText.value){
                rowData.remove();
                result.textContent = 'Deleted.';
            }else{
                 result.textContent = "Not found.";
            }

            console.log(data.textContent);
        }
    }
}