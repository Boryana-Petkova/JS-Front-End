
    const validLength = password => password.length >= 6 && password.length <= 10; 
    const onlyLettersAndDigits = password => /^[a-zA-Z0-9]+$/.test(password);
    const onlyTwoLetters = password => 
        password
    .split('')
    .filter(char => Number.isInteger(Number(char))).length >= 2;

        function validPassword (password){

            let isValid = true;

            if (!validLength (password)){
                isValid = false;
                console.log("Password must be between 6 and 10 characters");
            }
            
            if (!onlyLettersAndDigits(password)){
                isValid = false;
                console.log("Password must consist only of letters and digits");              
            }

            if (!onlyTwoLetters(password)){
                isValid = false;
                console.log("Password must have at least 2 digits");  
            }

            if (isValid){               
                console.log("Password is valid");              
            }

        }
        validPassword('MyPass123');


	
