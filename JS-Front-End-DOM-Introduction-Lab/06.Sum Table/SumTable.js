function sumTable() {

    const sumElement = document.getElementById('sum');

    const costElements = document.querySelectorAll('table tr td:nth-child(2):not(#sum)');

    sumElement.textContent = Array
    .from(costElements)
    .reduce((finalSum, currentCost) => finalSum + Number(currentCost.textContent), 0);    

}