function checkPositiveOrNegative (n1, n2, n3) {

    const multiplying = (a, b) => a * b;

    const result = multiplying (n1, multiplying(n2, n3));

    if (result >= 0){
        console.log("Positive");
        
    } else {
        console.log('Negative');
    }
}
checkPositiveOrNegative (-6,-12,14);