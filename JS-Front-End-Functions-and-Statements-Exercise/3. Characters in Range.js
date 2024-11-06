function solve (char1, char2){

    const [first, last] = getSortedCharacters (char1, char2);

    const result = getCharactersBetweenThem (first, last);

    console.log(result.join(' '));

}

function getSortedCharacters (...characters){

    characters.sort();

    return characters;

}

function getCharactersBetweenThem (first, last){

    const result = [];

    for (let i = first.charCodeAt(0) + 1; i < last.charCodeAt(0); i++){

        result.push(String.fromCharCode(i));
    }
    return result;
}

solve('C', '#');

// function getCharactersBetweenThem(char1, char2) {
//     const result = [];

//     // Определям по-малкия и по-големия ASCII код
//     const start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
//     const end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

//     // Извеждам символите между start и end
//     for (let i = start + 1; i < end; i++) {
//         result.push(String.fromCharCode(i));
//     }
    
//     return result;
// }

// console.log(getCharactersBetweenThem('C', '#'));


