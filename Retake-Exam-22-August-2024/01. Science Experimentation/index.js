function solve (input){

    const count = Number(input.shift());

    const chemicals = {};

    for (i = 0; i < count; i++){
    const [name, quantity] = input.shift().split(' # ');
    chemicals [name] = {quantity: Number(quantity), formula: null };
    }

    let commandLine = input.shift();

    const storageCapacity = 500;

    while (commandLine !== 'End'){

        const [command, ...args] = commandLine.split(' # ');


        switch (command){
            case 'Mix':
            const [chemical1, chemical2, amount] = args;
            const amountMix = Number(amount);

            if (chemicals[chemical1] && chemicals[chemical1]){
                if (chemicals[chemical1].quantity >= amountMix && chemicals[chemical2].quantity >= amountMix){
                    chemicals[chemical1].quantity -= amountMix;
                    chemicals[chemical2].quantity -= amountMix;
                    console.log(`${chemical1} and ${chemical2} have been mixed. ${amountMix} units of each were used.`);
                    
                } else {
                    console.log(`Insufficient quantity of ${chemical1}/${chemical2} to mix.`);                
                }
            }
                break;

            case 'Replenish':                
                const [chemical, amountArg] = args;
            const amountReplenish = Number(amountArg);
             

            if (chemicals[chemical]){
                let capacityChemical = (chemicals[chemical].quantity) + amountReplenish;  
                if (capacityChemical > 500) {
                    capacityChemical = 500;
                    console.log(`${chemical} quantity increased by ${500 - chemicals[chemical].quantity} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chemical} quantity increased by ${amountReplenish} units!`);  
                }

                chemicals[chemical].quantity = capacityChemical;
            
            } else {
                console.log(`The Chemical ${chemical} is not available in the lab.`);     
            }
            break;

            case 'Add Formula':
                const [currentChemical, formulaArg] = args;

                if (chemicals[currentChemical]){
                    chemicals[currentChemical].formula = formulaArg;
                    console.log(`${currentChemical} has been assigned the formula ${formulaArg}.`); 

                } else {
                    console.log(`The Chemical ${currentChemical} is not available in the lab.`);
                }         

            break;
        }


        commandLine = input.shift();
    }


for (const name in chemicals) {
    if (chemicals[name].formula){
        console.log(`Chemical: ${name}, Quantity: ${chemicals[name].quantity}, Formula: ${chemicals[name].formula}`);
    } else {
        console.log(`Chemical: ${name}, Quantity: ${chemicals[name].quantity}`);
    }    
 }

}





solve([ '3',
    'Sodium # 300',
    'Chlorine # 100',
    'Hydrogen # 200',
    'Mix # Sodium # Chlorine # 200',
    'Replenish # Sodium # 250',
    'Add Formula # Sulfuric Acid # H2SO4',
    'Add Formula # Sodium # Na',
    'Mix # Hydrogen # Chlorine # 50',
    'End']
  );



  