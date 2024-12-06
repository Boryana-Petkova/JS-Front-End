window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');    

    const ulPreviewListElement = document.getElementById('preview-list');

    const ulExpensesList = document.getElementById('expenses-list');

    const deleteBtn = document.querySelector('.btn.delete');


    addButtonElement.addEventListener('click', () => {
        // Get input information
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;


    //console.log(expense);
    // console.log(amount);
    // console.log(date);


     // Check empty element
     if (!expense || !amount || !date) {
        return;
    }


    // Add to preview list
    const liExpenseItem = createArticle(expense, amount, date);
    ulPreviewListElement.appendChild(liExpenseItem);

    // Disable add button
    addButtonElement.setAttribute('disabled', 'disabled');

     // clear inputs
     expenseInputElement.value = '';
     amountInputElement.value = '';
     dateInputElement.value = '';

     // Get button elements
     const editBtn = liExpenseItem.querySelector('.btn.edit');
     const okBtn = liExpenseItem.querySelector('.btn.ok');

     // Attach edit event listeners
     editBtn.addEventListener('click', () => {
        // send data to inputs
        expenseInputElement.value = expense;
        amountInputElement.value = amount;
        dateInputElement.value = date;

        // Clear preview (should remove event listeners also)
        liExpenseItem.remove();

        // Enable add button
       addButtonElement.removeAttribute('disabled');

        // Clear preview (should remove event listeners also)
       liExpenseItem.remove();

       // Enable add button
       addButtonElement.removeAttribute('disabled');

     });


      // Attach ok event listener
     okBtn.addEventListener('click', () => {

         // remove buttons from liExpense item
        const liButtons = liExpenseItem.querySelector('.buttons');
        liButtons.remove();
       

        // move expense item to expense list
        ulExpensesList.appendChild(liExpenseItem);

        // enable add button
        addButtonElement.removeAttribute('disabled');
     });

    });

        deleteBtn.addEventListener('click', () => {
            ulExpensesList.innerHTML = '';
        });


     


    function createArticle (expense, amount, date){
        const pExpenseType = document.createElement('p');
        pExpenseType.textContent = `Type: ${expense}`;

        const pAmount = document.createElement('p');
        pAmount.textContent = `Amount: ${amount}$`;

        const pDate = document.createElement('p');
        pDate.textContent = `Date: ${date}`;


        const articleElement = document.createElement('article');
        articleElement.appendChild(pExpenseType);
        articleElement.appendChild(pAmount);
        articleElement.appendChild(pDate);

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'edit');
        editBtn.textContent = 'edit';

        const okBtn = document.createElement('button');
        okBtn.classList.add('btn', 'ok');
        okBtn.textContent = 'ok';

        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');
        divButtons.appendChild(editBtn);
        divButtons.appendChild(okBtn);

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);

        return liElement;

    }   

}