function colorize() {
    const trElements = document.querySelectorAll('table tr');

    for(i = 1; i < trElements.length; i++){
        if (i % 2 !== 0){
            trElements[i].style.backgroundColor = 'Teal';
        }
    }
}