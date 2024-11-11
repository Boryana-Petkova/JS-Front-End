
function solve (input){    

    class Employee {
        constructor(name){
            this.name = name;
            this.num = name.length;
        }
    }    

    input.map(entry => entry.split(','))
    .map(([name]) => new Employee(name))    
    .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.num}`));  

}

solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);

//Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18
