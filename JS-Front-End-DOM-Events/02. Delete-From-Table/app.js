function deleteByEmail() {

    const table = document.getElementById('customers');

    const inputElement = document.querySelector('input[type=text][name=email]');     
    const search = inputElement.value;

    const resultElement = document.getElementById('result');

    const tdElements = table.querySelectorAll('tbody td:last-child');

    const tdFound = Array.from(tdElements).find(td => td.textContent === search);

    if (tdFound){
        tdFound.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

    
}