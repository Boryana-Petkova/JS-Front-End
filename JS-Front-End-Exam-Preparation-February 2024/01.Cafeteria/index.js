function solve (input){

    const baristaCount = Number(input.shift());
    const team = {};

    for(let i = 0; i < baristaCount; i++){
        const [name, shift, coffeeTypes] = input[i].split(' ');

        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','),
        }

    }
    //console.log(team);
    //check in terminal with => node .\index.js
    let commandLine = input.shift();

    while (commandLine != 'Closed'){
        const [command, name, firstArg, secondArg] = commandLine.split(' / ');
        const barista = team[name];

        let shift, coffeeType;

        switch(command){
            case 'Prepare':
                //Prepare / {barista name} / {shift} / {coffee type}"
                shift = firstArg;
                coffeeType = secondArg;
                if (barista.shift === shift && barista.coffeeTypes.includes(coffeeType)){
                        console.log(`${name} has prepared a ${coffeeType} for you!`);
                        
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }
                break;

                case 'Change Shift':
                    newShift = firstArg;
                    barista.shift = newShift;
                        console.log(`${name} has updated his shift to: ${newShift}`);
                break;
                case 'Learn':
                    coffeeType = firstArg;
                    if (barista.coffeeTypes.includes(coffeeType)){
                        console.log(`${name} knows how to make ${coffeeType}.`);
                    } else {
                        barista.coffeeTypes.push(coffeeType);
                        console.log(`${name} has learned a new coffee type: ${coffeeType}.`);
                    }
                break;
        }

        commandLine = input.shift();

    }

    //"Barista: {barista name}, Shift: {shift}, Drinks: {drink type 1, drink type 2, ...}"

    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`);
    }
}

