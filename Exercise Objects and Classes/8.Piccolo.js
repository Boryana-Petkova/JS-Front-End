function solve (input){

    const parkingLot = new Set();

    for (const line of input) {   
    const [direction, number] = line.split(', ');

    direction === 'IN'
    ? parkingLot.add(number)
    : parkingLot.delete(number)
    }

    if (parkingLot.size < 1){
        return console.log('Parking Lot is Empty');        
    }

    Array.from(parkingLot.values())
    .sort((a, b) => a.localeCompare(b))
    .forEach(number => console.log(number));    
    
}

solve (['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
    );

    
    