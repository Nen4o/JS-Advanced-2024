function search() {
   let townsList = document.getElementById('towns');
   let towns = townsList.getElementsByTagName('li');

   let searchText = document.getElementById('searchText');
   let matchesFound = document.getElementById('result');
   let count = 0;

   

   console.log(searchText.value);
   for (const element of towns) {
      let town = element;

      console.log(searchText);

      town.style.fontWeight = "normal";
      town.style.textDecoration = '';

      if (town.textContent.includes(searchText.value) && searchText.value !== '') {
         console.log('yes');
         town.style.fontWeight = "bold";
         town.style.textDecoration = 'underline';
         count++;
         matchesFound.textContent = `${count} matches found`;
      }
   }
}
