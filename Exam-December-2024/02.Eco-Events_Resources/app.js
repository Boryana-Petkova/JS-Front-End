window.addEventListener("load", solve);

function solve() {

  const nextButton = document.getElementById('next-btn');  
  
  

  nextButton.addEventListener('click', (e) => {
      const emailInput = document.getElementById('email');
      const eventInput = document.getElementById('event');
      const locationInput = document.getElementById('location');

      const email = emailInput.value;
      const event = eventInput.value;
      const location = locationInput.value;

      if (!email || !event || !location) {
          return;
      }

      const emailElement = document.createElement('h4');
      emailElement.textContent = `${email}`;

      const eventElement = document.createElement('p');
      eventElement.textContent = `Event:${event}`;

      const locationElement = document.createElement('p');
      locationElement.textContent = `Location:${location}`;

      const articleElement = document.createElement('article');
      articleElement.classList.add('article-flex');
      articleElement.appendChild(emailElement);
      articleElement.appendChild(eventElement);
      articleElement.appendChild(locationElement);   
      
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('action-btn');

      const buttonEditElement = buttonElement.cloneNode();
      buttonEditElement.classList.add('edit');
      buttonEditElement.textContent = 'edit';

      const buttonApplyElement = buttonElement.cloneNode();
      buttonApplyElement.classList.add('apply');
      buttonApplyElement.textContent = 'apply';            
      

      const liElement = document.createElement('li');
      liElement.classList.add('application');
      liElement.appendChild(articleElement);
      liElement.appendChild(buttonEditElement);
      liElement.appendChild(buttonApplyElement);
      

      const ulElement = document.getElementById('preview-list');
      ulElement.appendChild(liElement);

      const eventListElement = document.getElementById('event-list');

      emailInput.value = '';
      eventInput.value = '';
      locationInput.value = '';

      nextButton.setAttribute('disabled', 'disabled');

      buttonEditElement.addEventListener('click', (e) => {
        emailInput.value = email;
        eventInput.value = event;
        locationInput.value = location;

          liElement.remove();

          nextButton.removeAttribute('disabled');
      });

      buttonApplyElement.addEventListener('click', (e) => {
          
        
        buttonEditElement.remove();
        buttonApplyElement.remove();        
        
        
        
        eventListElement.appendChild(liElement);

        nextButton.removeAttribute('disabled');          
        
        

      });
      
    });
}

