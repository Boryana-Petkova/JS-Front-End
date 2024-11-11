function solve (input1, input2){
    
    let store = {};    

   
    input1.map((entry, index) => {
        if (index % 2 === 0) {
            const product = entry;
            const quantity = Number(input1[index + 1]); // елементът след четния индекс е количеството
            store[product] = quantity; 
        }
    });
    
    input2.map((entry, index) => {
        if (index % 2 === 0) {
            const currentProduct = entry; 
            const currentQuantity = Number(input2[index + 1]); 
           
            if (store.hasOwnProperty(currentProduct)) {
                store[currentProduct] += currentQuantity;
            } else {
                store[currentProduct] = currentQuantity; // ако продуктът го няма, добавяме него и стойността му
            }
        
        }
    });    

        for (const product in store) {
            console.log(`${product} -> ${store[product]}`);
        }
    
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );