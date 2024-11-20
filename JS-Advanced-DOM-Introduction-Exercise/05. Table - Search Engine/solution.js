function solve() {
  
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchElement = document.getElementById('searchField');
      const search = searchElement.value;

      for (const trElement of trElements) {  
         const tdElements = trElement.querySelectorAll('td');       
            let isSelected = false;

            trElement.classList.remove('select');
                 
      

      for (const tdElement of tdElements) {
         if (tdElement.textContent.toLowerCase().includes(search)){
            isSelected = true;
            break;
         }         
      }

      if(isSelected){
         trElement.classList.add('select');
      }
   }

      
      searchElement.value = '';

   }         
}