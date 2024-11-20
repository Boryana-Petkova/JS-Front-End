function subtract() {

    const num1 = document.getElementById('firstNumber');
    const num2 = document.getElementById('secondNumber');

    const resultElement = document.getElementById('result');

    const first = Number(num1.value);
    const second = Number(num2.value);

    const result = resultElement.textContent = first - second;

   
}