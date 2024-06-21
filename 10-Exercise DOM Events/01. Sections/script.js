function create(words) {
   let content = document.getElementById('content');

   for (const text of words) {
      const divElement = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = text;
      paragraph.style.display = 'none';
      divElement.addEventListener('click', onClick);

      divElement.appendChild(paragraph);
      content.appendChild(divElement);
   }

   function onClick(event){
      let currentTarget = event.currentTarget;
      currentTarget.querySelector('p').style.display = 'block';
   }
}