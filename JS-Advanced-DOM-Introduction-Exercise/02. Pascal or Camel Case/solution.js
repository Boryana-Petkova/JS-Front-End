function solve() {

  const textElement = document.getElementById('text').value.trim();
  const convert = document.getElementById('naming-convention').value.trim();

  const resultElement = document.getElementById('result');
  

  let result = '';

  if (convert === "Camel Case"){
    result = textElement
    .split(' ')  
        .map((word, index) => index === 0 
            ? word.toLowerCase()  
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  
        .join('');         

  } else if ( convert === "Pascal Case"){
    result = textElement
            .split(' ')  
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  
            .join('');     

  } else {
        result = 'Error!';
  }

  resultElement.textContent = result;

}