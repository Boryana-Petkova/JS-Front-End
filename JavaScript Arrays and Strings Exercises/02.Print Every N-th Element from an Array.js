
function printNthElement (arr, step){
    let nthElements = [];
    for(let i = 0; i < arr.length; i += step){
        nthElements.push(arr[i]);

    }
    console.log(nthElements);
    


}
//printNthElement(['dsa','asd','test','tset'], 2);

printNthElement(['1','2','3','4','5'], 6);




