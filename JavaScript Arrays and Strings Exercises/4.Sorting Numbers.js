
function sortNumbers (arr) {
    
    arr.sort((a, b) => a-b);

    let result = [];
    
    let smallEven = 0;
    let bigOdd = arr.length - 1;

    for (let i = 0; smallEven <= bigOdd; i++){

        if (i % 2 === 0){
            result.push(arr[smallEven]);
            smallEven++;

        } else {
            result.push(arr[bigOdd]);
            bigOdd--;
        }
    }

    console.log(result);
    
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

