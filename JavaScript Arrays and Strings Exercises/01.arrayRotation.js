

function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations; i++) {

        //first version 
        // arr.push(arr.shift());

        // second version
        // take first element 
        let firstElement = arr.shift();
        
        // add this element in the end
        arr.push(firstElement);
    }
    
    console.log(arr.join(' '));
}


rotateArray([2, 4, 15, 31], 5);





