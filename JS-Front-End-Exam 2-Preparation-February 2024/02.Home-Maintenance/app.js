window.addEventListener("load", solve);

function solve (){

    const addButtonElement = document.getElementById('add-btn');
    const ulTaskList = document.getElementById('task-list');   
    const ulDoneTaskList = document.getElementById('done-list');  
    

    const placeInput = document.getElementById('place');
    const actionInput = document.getElementById('action');
    const personInput = document.getElementById('person');

    const deleteBtn = document.querySelector('.delete');




    addButtonElement.addEventListener('click', () => {

    const place = placeInput.value;
    const action = actionInput.value;
    const person = personInput.value;

    if (!place || !action || !person){
        return;  
    }

    const liTask = createArticle(place, action, person);
    ulTaskList.appendChild(liTask);

    
     // clear inputs
     placeInput.value = '';
     actionInput.value = '';
     personInput.value = '';

     //When the [Edit] button is clicked, the information from the task must be sent to the input fields on the left side and the record should be deleted from the <ul> "task-list".
     //After editing the information, add a new item to the <ul> with the updated information.

     // Get button elements
     const editBtn = liTask.querySelector('.edit');
     const doneBtn = liTask.querySelector('.done');

     editBtn.addEventListener('click', () => {
         // send data to inputs
        placeInput.value = place;
        actionInput.value = action;
        personInput.value = person;

        ulTaskList.removeChild(liTask);


     });

        doneBtn.addEventListener('click', () => {
            ulDoneTaskList.appendChild(liTask);

            const liButtons = liTask.querySelector('.buttons');
            liButtons.remove();

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');

            liTask.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', () => {
                ulDoneTaskList.removeChild(liTask);
            });

        });  


    });



    function createArticle (place, action, person){   

    
    const placeElement = document.createElement('p');
    placeElement.textContent = `Place: ${place}`;
    const actionElement = document.createElement('p');
    actionElement.textContent = `Action: ${action}`;
    const personElement = document.createElement('p');
    personElement.textContent = `Person: ${person}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(placeElement);
    articleElement.appendChild(actionElement);
    articleElement.appendChild(personElement);


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.classList.add('done');

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons');
    divButtons.appendChild(editBtn);
    divButtons.appendChild(doneBtn);

    const liElement = document.createElement('li');
    liElement.classList.add('clean-task');
    liElement.appendChild(articleElement);
    liElement.appendChild(divButtons);


       return liElement;

    }

}
