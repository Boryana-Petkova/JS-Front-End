function search() {
   const textElement = document.querySelectorAll('#towns li')

   const resultElement = document.getElementById('result');

   const searchInButton = document.getElementById('searchText').value.trim();

   let matches = 0;

   textElement.forEach(li =>  {
      li.style.fontWeight = '';
         li.style.textDecoration = '';
   });

   textElement.forEach(li =>  {
      if (li.textContent.toLowerCase().includes(searchInButton.toLowerCase())){
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         matches ++;         
      }
   });

   resultElement.textContent = `${matches} matches found`;

   
}
