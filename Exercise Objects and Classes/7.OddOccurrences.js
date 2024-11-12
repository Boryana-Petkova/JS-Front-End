function solve (input){
    
    const words = input.toLowerCase().split(' ');  
    const wordMap = new Map();

    for (const word of words) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 0);
        }
        wordMap.set(word, wordMap.get(word) + 1);
    }

    const result = [];
    
    for (const [word, count] of wordMap) {
        if (count % 2 !== 0) {
            result.push(word);
        }
    }
    console.log(result.join(' ')); 
    
}
 solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
