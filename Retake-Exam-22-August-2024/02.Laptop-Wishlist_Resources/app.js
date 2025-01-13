window.addEventListener("load", solve);

  function solve() {

    const addButton = document.getElementById('add-btn');  
    
    
    
    addButton.addEventListener('click', (e) => {
        const modelInput = document.getElementById('laptop-model');
        const storageInput = document.getElementById('storage');
        const priceInput = document.getElementById('price');

        const model = modelInput.value;
        const storageSpace = storageInput.value;
        const price = priceInput.value;

        if (!model || !storageSpace || !price) {
            return;
        }

        const modelElement = document.createElement('p');
        modelElement.textContent = model;

        const storageSpaceElement = document.createElement('p');
        storageSpaceElement.textContent = `Memory: ${storageSpace} TB`;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${price}$`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(modelElement);
        articleElement.appendChild(storageSpaceElement);
        articleElement.appendChild(priceElement);

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('btn');

        const buttonEditElement = buttonElement.cloneNode();
        buttonEditElement.classList.add('edit');
        buttonEditElement.textContent = 'edit';

        const buttonOkElement = buttonElement.cloneNode();
        buttonOkElement.classList.add('ok');
        buttonOkElement.textContent = 'ok';

        const liElement = document.createElement('li');
        liElement.className = 'laptop-item';
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonEditElement);
        liElement.appendChild(buttonOkElement);

        const ulElement = document.getElementById('check-list');
        ulElement.appendChild(liElement);

        const laptopListElement = document.getElementById('laptops-list');

        modelInput.value = '';
        storageInput.value = '';
        priceInput.value = '';

        addButton.setAttribute('disabled', 'disabled');

        buttonEditElement.addEventListener('click', (e) => {
          modelInput.value = model;
          storageInput.value = storageSpace;
          priceInput.value = price;

            liElement.remove();

            addButton.removeAttribute('disabled');
        });

        buttonOkElement.addEventListener('click', (e) => {
            
            buttonEditElement.remove();
            buttonOkElement.remove();
            
            laptopListElement.appendChild(liElement);
            addButton.removeAttribute('disabled');
        });

        const clearButton = document.querySelector('.clear');

        
        clearButton.addEventListener('click', () => {
            location.reload(); 
        });
    });
}
  