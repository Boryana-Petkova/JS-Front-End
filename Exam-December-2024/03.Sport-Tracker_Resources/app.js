const baseUrl = 'http://localhost:3030/jsonstore/workout';


const loadBtn = document.getElementById('load-workout');

const divDom = document.getElementById('list');
const formElement = document.querySelector('#form form');


const addBtnForm = document.getElementById('add-workout');
addBtnForm.textContent = 'Add Workout';
const editBtnForm = document.getElementById('edit-workout');
editBtnForm.textContent = 'Edit Workout';


const workoutInput = document.getElementById('workout');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');


loadBtn.addEventListener('click', loadRecords);  
addBtnForm.addEventListener('click', addRecord);  
editBtnForm.addEventListener('click', editRecord);  


async function editRecord () {  
  const recordId = formElement.getAttribute('data-record-id');
 
  const workout = workoutInput.value;
  const location = locationInput.value;
  const date = dateInput.value; 

  await fetch(`${baseUrl}/${recordId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ workout, location, date, _id: recordId }),
});

    clearForm();
    
    addBtnForm.disabled = false;
    editBtnForm.disabled = true;

    await loadRecords();

    // clear attribute ID
    formElement.removeAttribute('data-record-id');

}


async function addRecord () {  
  

  const workout = workoutInput.value;
  const location = locationInput.value;
  const date = dateInput.value; 

  clearForm();
  

  await fetch(baseUrl, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({ workout, location, date }),
       });



await loadRecords();      
 
}




async function loadRecords() {   
    
     
    divDom.innerHTML = '';

    
    const response = await fetch(baseUrl);
    const result = await response.json();
    const records = Object.values(result);

    
    const recordElements = records.map(record => createRecordElement(record.workout, record.location, record.date, record._id));

    
    divDom.append(...recordElements);
 
    }
    

    function createRecordElement (workout, location, date, recordId) {    

    
    const changeBtn = document.createElement('button');
    changeBtn.classList.add('change-btn');
    changeBtn.textContent = 'Change';

    const deleteBtn = document.createElement('button');    
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Done';       

    const h2Workout = document.createElement('h2');
    h2Workout.textContent = workout;
    const h3Location = document.createElement('h3');
    h3Location.textContent = location;
    const h3Date = document.createElement('h3');
    h3Date.textContent = date;  
    
    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons-container'); 
    divButtons.appendChild(changeBtn);
    divButtons.appendChild(deleteBtn);

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    divContainer.appendChild(h2Workout);
    divContainer.appendChild(h3Location);
    divContainer.appendChild(h3Date);
    divContainer.appendChild(divButtons);     
    

    changeBtn.addEventListener('click', (e) => {
      workoutInput.value = workout;
      locationInput.value = location;
      dateInput.value = date;    

      
      
      addBtnForm.disabled = true;
      editBtnForm.disabled = false;

      
      formElement.setAttribute('data-record-id', recordId);

  });  
  
    deleteBtn.addEventListener('click', async (e) => {
    
    await fetch(`${baseUrl}/${recordId}`, {
      method: 'DELETE',
  });

  
  await loadRecords();
   });

   

    return divContainer;    

     }   
      

  
  function clearForm() {
    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';
    
  }