window.addEventListener("load", solve);

function solve() {

  const addButton = document.getElementById('add-btn');  
  
  
  

  addButton.addEventListener('click', (e) => {
      const nameInput = document.getElementById('name');
      const dateTimeInput = document.getElementById('time');
      const descriptionInput = document.getElementById('description');

      const name = nameInput.value;
      const dateTime = dateTimeInput.value;
      const description = descriptionInput.value;

      if (!name || !dateTime || !description) {
          return;
      }

      const nameElement = document.createElement('p');
      nameElement.textContent = `${name}`;

      const dateTimeElement = document.createElement('p');
      dateTimeElement.textContent = `${dateTime}`;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = `${description}`;

      const articleElement = document.createElement('article');
      articleElement.classList.add('article-flex');
      articleElement.appendChild(nameElement);
      articleElement.appendChild(dateTimeElement);
      articleElement.appendChild(descriptionElement);      

      const buttonEdit = document.createElement('button');
      buttonEdit.classList.add('edit-btn');
      buttonEdit.textContent = 'Edit';            

      const buttonNext = document.createElement('button');
      buttonNext.classList.add('next-btn');
      buttonNext.textContent = 'Next';

      const buttonArchive = document.createElement('button');
      buttonArchive.classList.add('archive-btn');
      buttonArchive.textContent = 'Archive';    

      const divButtons = document.createElement('div');
      divButtons.classList.add('buttons-flex');
      divButtons.appendChild(buttonEdit);
      divButtons.appendChild(buttonNext);     
      

      const liElement = document.createElement('li');
      liElement.classList.add('li-flex');
      liElement.appendChild(articleElement);
      liElement.appendChild(divButtons);
      

      const ulElement = document.getElementById('preview-list');
      ulElement.appendChild(liElement);

      const archiveListElement = document.getElementById('archive-list');

      nameInput.value = '';
      dateTimeInput.value = '';
      descriptionInput.value = '';

      addButton.setAttribute('disabled', 'disabled');

      buttonEdit.addEventListener('click', (e) => {
      nameInput.value = name;
      dateTimeInput.value = dateTime;
      descriptionInput.value = description;

          liElement.remove();

          addButton.removeAttribute('disabled');
      });

      buttonNext.addEventListener('click', (e) => {
          
        liElement.removeChild(divButtons);
        //buttonNext.remove();
          
        liElement.appendChild(buttonArchive);
        
        
        archiveListElement.appendChild(liElement);

        addButton.removeAttribute('disabled');          
        
        

      });

      buttonArchive.addEventListener('click', () => {
        archiveListElement.removeChild(liElement); 
      
      addButton.removeAttribute('disabled');
      });
    });
}
