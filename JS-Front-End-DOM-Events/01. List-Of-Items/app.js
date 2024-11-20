function addItem() {

    const newText = document.getElementById('newItemText');
    const newTextValue = newText.value;

    const list = document.getElementById('items');

    let li = document.createElement('li');
    li.textContent = newTextValue;

    list.appendChild(li);   

    newText.value = '';




    console.log(li);
}