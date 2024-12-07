const baseUrl =	'http://localhost:3030/jsonstore/gifts';


const loadButton = document.getElementById('load-presents');
const listGifts = document.getElementById('gift-list');

const addButton = document.getElementById('add-present');

const editButton = document.getElementById('edit-present');

const giftInput = document.getElementById('gift');
const forGiftInput = document.getElementById('for');
const priceInput = document.getElementById('price');


const formElement = document.getElementById('form');

listGifts.addEventListener('click', deleteGift);



loadButton.addEventListener('click', loadPresents);

editButton.addEventListener('click', editGift);

addButton.addEventListener('click', addGift);

function addGift () {
    
    // get input data
    const present = getInputData();
 
    // create post request
    fetch(baseUrl, {
     method: 'POST',
     headers: {
         'content-type': 'application/json',
     },
     body: JSON.stringify(present),
 })
 
     .then (res => {
        if(!res.ok) {
            return;
        }
    
 
   // clear input fields
   clearInputData();

   // load all gifts
  return loadPresents();    

});         

}

async function loadPresents() {    

            // Fetch all meals
        const response = await fetch(baseUrl);        
    
        const presents = await response.json();
    
         //console.log(Object.values(presents));
    
          //clear listGifts after each iterate
          listGifts.innerHTML = '';   
    
    
          const fragmentList = document.createDocumentFragment();
    
          Object.values(presents)
          .forEach(present => {
            fragmentList.appendChild(createGiftElement(present));
          
            });    
    
          // And Attach fragment to dom
          listGifts.appendChild(fragmentList);    
    
          }
    

function createGiftElement (present){

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change';
    changeBtn.classList.add('change-btn');
    changeBtn.addEventListener('click', (e) => changeGift(e, present));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent =  'Delete';
    deleteBtn.classList.add('delete-btn');

    const divGiftButtons = document.createElement('div');
    divGiftButtons.id = 'buttons-container';
    divGiftButtons.appendChild(changeBtn);
    divGiftButtons.appendChild(deleteBtn);

    const giftP1 = document.createElement('p');
    giftP1.textContent = present.gift;

    const giftForP1 = document.createElement('p');
    giftForP1.textContent = present.for;

    const priceP1 = document.createElement('p');
    priceP1.textContent = present.price;

        const divGift = document.createElement('div');
        divGift.classList.add('content');
        divGift.appendChild(giftP1);
        divGift.appendChild(giftForP1);
        divGift.appendChild(priceP1);
       


        const divSock = document.createElement('div');
        divSock.classList.add('gift-sock');
        divSock.appendChild(divGift);
        divSock.appendChild(divGiftButtons);
        

        divSock.setAttribute('data-id', present._id);        

        return divSock;     
        
}



function changeGift(e, present){

    //console.log(e.currentTarget);

    //const giftElement = e.currentTarget.closest('gift-sock');
    // ТОВА СЕ ИЗПОЛЗВА В РЕАЛНАТА РАБОТА И СЕ ПРЕПОРЪЧВА!!!
    //console.log(giftElement);

    const giftElement = e.currentTarget.parentElement.parentElement;
    //ТОВА НЕ СЕ ПРЕПОРЪЧВА, НО ТУК ГО ПОЛЗВАМЕ ЗАРАДИ ДЖЪДЖ

    //remove the present from the DOM
    giftElement.remove();


    //populated into the input fields 
    giftInput.value = present.gift;
    forGiftInput.value = present.for;
    priceInput.value = present.price;
    

    //add attribute about id
    formElement.setAttribute('data-id', present._id);


    // activate edit button
    editButton.removeAttribute('disabled');

    // deactivate add button
    addButton.setAttribute('disabled', 'disabled');


}

function editGift(){
    // Get data from inputs
    const present = getInputData();

    // get id
    const giftId = formElement.getAttribute('data-id');

    // remove id
    formElement.removeAttribute('data-id');

    // send put request
    fetch(`${baseUrl}/${giftId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ _id: giftId, ...present }),
})
.then (res => {

    if (!res.ok){
        return;
    }   

   // fetch all gifts
   loadPresents(); 
  
  // activate button
  addButton.removeAttribute('disabled');

  // deactivate button
  editButton.setAttribute('disabled', 'disabled');

  // clear input fields
  clearInputData();

});
}



// this is event delegation
function deleteGift(e){

    if (e.target.tagName !== 'BUTTON' || !e.target.classList.contains('delete-btn')){
        return;
    }
    // console.log(e.target);

    //get element
    const getGiftElement = e.target.parentElement.parentElement;

    //get id
    const giftId = getGiftElement.getAttribute('data-id');

    fetch(`${baseUrl}/${giftId}`, {
        method: 'DELETE',
       
})
.then (res => {

    if (!res.ok){
        return;
    }

    getGiftElement.remove();
    
});
}


function clearInputData() {
    giftInput.value = '';
    forGiftInput.value = '';
    priceInput.value = '';
  }

  function getInputData (){

   return {
    gift: giftInput.value,
    for: forGiftInput.value,
    price: priceInput.value
   }   

  };
  

