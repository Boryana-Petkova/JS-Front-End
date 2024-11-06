
function solve (number){

    const isEven = x => x % 2 === 0;
    const isOdd = x => !isEven(x);

    const sumEven = sumDigits (number, isEven);
    const sumOdd = sumDigits (number, isOdd);

    print(sumOdd, sumEven);
    

}

function sumDigits (number, filter){

    const filterDigits = number
    .toString()
    .split('')
    .map(Number)
    .filter(filter);

    const sum = filterDigits.reduce((acc, digit) => acc + digit, 0);

    return sum;
}

function print(sumOdd, sumEven) {
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

solve(1000435);


// function sumEvenAndOdd (number){

//     const digits = number.toString();

//     let sumEven = 0;
//     let sumOdd = 0;

//     for (const digit of digits) {
//         const currentNumber = parseInt(digit);

//         if (currentNumber % 2 === 0){
//             sumEven += currentNumber;
//         } else {
//             sumOdd += currentNumber;
//         } 
//     }

//     console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    

// }
// sumEvenAndOdd (1000435);