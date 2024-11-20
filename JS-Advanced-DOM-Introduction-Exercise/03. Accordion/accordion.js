function toggle() {

    const textElement = document.getElementById('extra');
    const buttonElement = document.querySelector('.head span.button');

    const currentButtonText = buttonElement.textContent;

    if (currentButtonText === 'More'){
        textElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        textElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
    
}