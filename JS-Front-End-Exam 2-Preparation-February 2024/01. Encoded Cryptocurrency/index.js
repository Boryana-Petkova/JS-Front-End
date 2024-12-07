function solve (input){
    
    let line = input.shift();

    let commandLine = input.shift();  
    

    while (commandLine !== 'Buy'){
        const [command, arg1, arg2] = commandLine.split('?');           

        switch (command){
            case 'TakeEven':
                let newLine = '';
                
                for (let i = 0; i < line.length; i++) {        
                    if (i %2 === 0){
                        newLine += line[i];            
                    }        
                } 
                line = newLine;
                console.log(line); 
                break;

            case 'ChangeAll':
                
                let substring = arg1;
                let replaceText = arg2;

                if (line.includes(substring)){
                    line = line.split(substring).join(replaceText);                   
                }   
                console.log(line);              
                break;

            case 'Reverse':
                let currentSubstring = arg1;

                if (line.includes(currentSubstring)){
                    line = line.replace(currentSubstring, '');
                    const reverseElement = currentSubstring.split('').reverse().join('');
                    line += reverseElement;
                    console.log(line); 
                } else {
                    console.log("error");
                }
                break;
        }

        commandLine = input.shift();
    }

    console.log(`The cryptocurrency is: ${line}`);    

    
    
}

solve ((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
    );