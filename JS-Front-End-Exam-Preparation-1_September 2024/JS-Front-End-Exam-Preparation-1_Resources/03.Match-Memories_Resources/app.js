const baseUrl = 'http://localhost:3030/jsonstore/matches';

const loadBtn = document.getElementById('load-matches');
const ulDom = document.getElementById('list');

const addBtnForm = document.getElementById('add-match');
addBtnForm.textContent = 'Add Match';

const editBtnForm = document.getElementById('edit-match');
editBtnForm.textContent = 'Edit Match';


const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');


loadBtn.addEventListener('click', loadMatches);  

addBtnForm.addEventListener('click', addMatch);  


// const types = [
//   '',
//   '',
//   '',
// ];

editBtnForm.addEventListener('click', editMatch);  

let currentMatchId = '';





async function editMatch (e) {  
  e.preventDefault(); 

  // Get data from inputs
  const host = hostInput.value;
  const score = scoreInput.value;
  const guest = guestInput.value;
  

//   if (!courseTypes.includes(type)) {
//     return;
// }
 
const match = {
  host,
  score,
  guest,
  
};
  

await fetch(`${baseUrl}/${currentMatchId}`, {
  method: 'PUT',
  body: JSON.stringify(match),
});

clearForm();
    
    addBtnForm.disabled = false;
    editBtnForm.disabled = true;

    await loadMatches();

}




async function addMatch (e) {  
  e.preventDefault();

  // get input data
  const host = hostInput.value;
  const score = scoreInput.value;
  const guest = guestInput.value;

//   if (!courseTypes.includes(type)) {
//     return;
// }
 
const match = {
    host,
    score,
    guest,
    
  };

await fetch(baseUrl, {
  method: 'POST',
  body: JSON.stringify(match),
});

clearForm();

await loadMatches();      
 
}





async function loadMatches() {   
    
     // Fetch all 
     const response = await fetch(baseUrl);

     const data = await response.json();

       ulDom.innerHTML = '';       
    
       const matches = Object.keys(data).map(key => ({_id: key, ...data[key]})); // optional

        for (const match of matches) {
            const matchElement = createMatch(match);
            matchElement.setAttribute('data-match-id', match._id);
        
            ulDom.appendChild(matchElement);
        }
 
    }
    

    function createMatch (match) {    

    
    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';

    const deleteBtn = document.createElement('button');    
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
   

    const pHost = document.createElement('p');
    pHost.textContent = match.host;
    const pScore = document.createElement('p');
    pScore.textContent = match.score;
    const pGuest = document.createElement('p');
    pGuest.textContent = match.guest;

    
    const divInfo = document.createElement('div');
    divInfo.className = 'info';
    divInfo.appendChild(pHost);
    divInfo.appendChild(pScore);
    divInfo.appendChild(pGuest);
   

    const divButtons = document.createElement('div');
    divButtons.className = 'btn-wrapper'; 
    divButtons.appendChild(changeBtn);
    divButtons.appendChild(deleteBtn);

    const li = document.createElement('li');
    li.className = 'match'; 
    li.appendChild(divInfo);       
    li.appendChild(divButtons);    
    
    

    changeBtn.addEventListener('click', (e) => {
      hostInput.value = match.host;
      scoreInput.value = match.score;
      guestInput.value = match.guest;
      

      currentMatchId = li.getAttribute('data-match-id');
      li.remove();
      
      addBtnForm.disabled = true;
      editBtnForm.disabled = false;

  });  
  
    deleteBtn.addEventListener('click', async (e) => {
    await fetch(`${baseUrl}/${match._id}`, {
        method: 'DELETE',
    });

     await loadMatches();
   });

    return li;    

     }   
      

  
  function clearForm() {
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
    
  }