function calc() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    const firstElement = Number(num1Element.value);
    const secondElement = Number(num2Element.value);

    sumElement.value = firstElement + secondElement;
}
