function solve (input){

    class Table {
        constructor(town, latitude, longitude){
            this.town = town;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }
    input.map(entry => entry.split(' | '))
    .map(([town, latitude, longitude]) => new Table (town, latitude, longitude))
    
    .forEach(table => console.log(`{ town: '${table.town}', latitude: '${table.latitude}', longitude: '${table.longitude}' }`));
    


}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );

//{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
//{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }


