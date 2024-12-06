
const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButton = document.getElementById('load-meals');
const listMeals = document.getElementById('list');

const addButton = document.getElementById('add-meal');

const editButton = document.getElementById('edit-meal');

const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');

const formElement = document.getElementById('form');

//let currentMealId = null;

const loadMeals = async() => {

  // Fetch all meals
  const response = await fetch(baseUrl);

  const data = await response.json();

   //console.log(Object.values(data));

    // clear listMeals after each iterate
    listMeals.innerHTML = '';

   for (const meal of Object.values(data)) {
     const changeBtn = document.createElement('button');
     changeBtn.textContent = 'Change';
     changeBtn.classList.add('change-meal');

     const deleteBtn = document.createElement('button');
     deleteBtn.textContent =  'Delete';
     deleteBtn.classList.add('delete-meal');

     const divMealButtons = document.createElement('div');
     divMealButtons.id = 'meal-buttons';
     divMealButtons.appendChild(changeBtn);
     divMealButtons.appendChild(deleteBtn);

     const foodH2 = document.createElement('h2');
     foodH2.textContent = meal.food;

     const timeH3 = document.createElement('h3');
     timeH3.textContent = meal.time;

     const caloriesH3 = document.createElement('h3');
     caloriesH3.textContent = meal.calories;

     const divMeal = document.createElement('div');
     divMeal.classList.add('meal');
     divMeal.appendChild(foodH2);
     divMeal.appendChild(timeH3);
     divMeal.appendChild(caloriesH3);
     divMeal.appendChild(divMealButtons);

     
     // And Attach meal to dom
     listMeals.appendChild(divMeal);


     // Attach on change
     changeBtn.addEventListener('click', () => {

      formElement.setAttribute('data-id', meal._id);
      
      //  populate input
      foodInput.value = meal.food;
      timeInput.value = meal.time;
      caloriesInput.value = meal.calories;

      // activate edit button
      editButton.removeAttribute('disabled');

      // deactivate add button
      addButton.setAttribute('disabled', 'disabled');

      // remove from list     
      divMeal.remove();

    });

    // Attach on delete
    deleteBtn.addEventListener('click', async () => {
      // delete http request
      await fetch(`${baseUrl}/${meal._id}`, {
          method: 'DELETE'
      });

      // remove from list
      divMeal.remove();    
  });
     
   }   
};


loadButton.addEventListener('click', async() => {

     // Fetch all meals
     const response = await fetch(baseUrl);

     const data = await response.json();

      //console.log(Object.values(data));

       // clear listMeals after each iterate
       listMeals.innerHTML = '';

      for (const meal of Object.values(data)) {
        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.classList.add('change-meal');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent =  'Delete';
        deleteBtn.classList.add('delete-meal');

        const divMealButtons = document.createElement('div');
        divMealButtons.id = 'meal-buttons';
        divMealButtons.appendChild(changeBtn);
        divMealButtons.appendChild(deleteBtn);

        const foodH2 = document.createElement('h2');
        foodH2.textContent = meal.food;

        const timeH3 = document.createElement('h3');
        timeH3.textContent = meal.time;

        const caloriesH3 = document.createElement('h3');
        caloriesH3.textContent = meal.calories;

        const divMeal = document.createElement('div');
        divMeal.classList.add('meal');
        divMeal.appendChild(foodH2);
        divMeal.appendChild(timeH3);
        divMeal.appendChild(caloriesH3);
        divMeal.appendChild(divMealButtons);

        
        // And Attach meal to dom
        listMeals.appendChild(divMeal);        
        
      }   
});

loadButton.addEventListener('click', loadMeals);

editButton.addEventListener('click', async () => {

  // get input data
  const { food, calories, time } = getInputData();

  // get meal id
  const mealId = formElement.getAttribute('data-id');

  // make a put request
  const response = await fetch(`${baseUrl}/${mealId}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        _id: mealId,
        food,
        calories,
        time,
    })
});

if (!response.ok) {
    return;
}

// deactivate edit button
editButton.setAttribute('disabled', 'disabled');

// activate add button
addButton.removeAttribute('disabled');

// clear currentMealId
formElement.removeAttribute('data-id');

// clear inputs fields
clearInputData();
    
// load meals
await loadMeals();

});




addButton.addEventListener('click', async ( )=> {

   // get input data
   const newData = getInputData();

   // create post request
   const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(newData),
});

    if (!response.ok) {
      return;
    }

  // clear input fields
  clearInputData();

  // load all meals
  await loadMeals();    

});

function getInputData() {
  const food = foodInput.value;
  const time = timeInput.value;
  const calories = caloriesInput.value;

  return { food, time, calories };
}

function clearInputData() {
  foodInput.value = '';
  timeInput.value = '';
  caloriesInput.value = '';
}

