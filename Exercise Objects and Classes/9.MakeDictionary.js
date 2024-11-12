function solve (input){

    const dictionary = {};
    
    for (const jsonStr of input) {
        const text = JSON.parse(jsonStr); 

        const term = Object.keys(text)[0]; 
        const definition = text[term]; 
        
        dictionary[term] = definition;
    }

    
    const sortedEntries = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

   
    for (const [term, definition] of sortedEntries) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }

}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);