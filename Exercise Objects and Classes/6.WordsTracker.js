function solve (input){

    const words = {};
    const givenWords = input.shift().split(' ');

    givenWords.forEach(givenWord => words[givenWord] = 0);

    for (const word of input) {
       if (words.hasOwnProperty(word)){
            words[word] += 1;
       }
    }

    const orderedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    orderedWords.forEach(orderedWord => {
        console.log(`${orderedWord[0]} - ${orderedWord[1]}`);        
    });
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);



    