function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let tBodyElements = document.querySelectorAll('tbody tr');
   let inputText = document.getElementById('searchField');

   function onClick() {
      
      for(let i = 0; i < tBodyElements.length; i++){
         let tableData = tBodyElements[i].querySelectorAll('td');
         tBodyElements[i].classList = '';

         for (const element of tableData) {
            if (element.textContent.includes(inputText.value) && inputText.value !== '') {
               tBodyElements[i].classList = 'select';
               console.log('yes');
            }
         }
      }
   }
}