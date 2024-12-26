function solve (input){

    const piecesCount = Number(input.shift());
    const piecesCollection = {};

    for (i = 0; i < piecesCount; i++){

        const [name, composer, key] = input.shift().split('|');

        piecesCollection [name] = {composer, key};
    }



    let commandLine = input.shift();

    while (commandLine != 'Stop'){
        const lineArr = commandLine.split('|');

        const command = lineArr[0];
        const name = lineArr[1];   
        
        let composer, key;


        switch(command){
            case 'Add':
                //Add|Sonata No.2|Chopin|B Minor"                
                composer = lineArr[2];
                key = lineArr[3];

                if (!piecesCollection.hasOwnProperty(name)) {
                    piecesCollection[name] = { composer, key };
                    console.log(`${name} by ${composer} in ${key} added to the collection!`);
                  } else {
                    console.log(`${name} is already in the collection!`);
                  }                
                break;

                case 'Remove':                                                
                    if (piecesCollection.hasOwnProperty(name)) {
                        delete piecesCollection[name];
                     console.log(`Successfully removed ${name}!`);
                    } else {
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                    }
                    break;                

                case 'ChangeKey':            
                const newKey = lineArr[2];
                if (piecesCollection.hasOwnProperty(name)) {
                    piecesCollection[name].key = newKey;
                    console.log(`Changed the key of ${name} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                }
                break;     
            }     

                commandLine = input.shift();
            }
        

            // //"{Piece} -> Composer: {composer}, Key: {key}"            
            for (const name in piecesCollection) {
                console.log(`${name} -> Composer: ${piecesCollection[name].composer}, Key: ${piecesCollection[name].key}`);
             }
        }          


solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );

 
  