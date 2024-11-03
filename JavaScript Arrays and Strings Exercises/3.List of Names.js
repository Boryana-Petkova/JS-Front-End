function solve (arrNames){

    
    arrNames.sort();

    const result = arrNames.map((arrName, index) => `${index + 1}.${arrName}`).join('\n');

    console.log(result);
    
}

solve (["John", "Bob", "Christina", "Ema"]);



