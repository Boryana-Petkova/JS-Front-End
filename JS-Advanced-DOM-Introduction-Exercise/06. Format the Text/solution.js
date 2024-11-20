function solve() {
  
  const textInput = document.getElementById('input');
  const textOutput = document.getElementById('output');

  const text = textInput.value;
  
 

  // !!sentence е начин да проверим дали низът не е празен и премахваме празни изречения

  const result = text.split('.').filter(sentence => !!sentence) 
  .reduce((result, sentence, index) => {
    const p3 = Math.floor(index / 3);
    
    if (!result[p3]){
      result[p3] = []
    }
    
    result[p3].push(sentence.trim());
    
    return result;

    }, [])
    .map(sentences => `<p>${sentences.join('.')}.</p>`).join('\n');
  // обединяваме изреченията в групите и ги поставяме в HTML параграфи, като всяка група от изречения се превръща в един параграф.

    textOutput.innerHTML = result;
   

  
}