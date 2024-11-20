function addItem() {
    const list = document.getElementById('items');
    const newItem = document.getElementById('newItemText');
    

    liElement = document.createElement('li');
    liElement.textContent = newItem.value;

    const linkBtn = document.createElement('a');
    linkBtn.textContent = '[Delete]';
    linkBtn.href = '#';

    linkBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();
    });

    liElement.append(linkBtn);

    list.appendChild(liElement);

    newItem.value = '';
}