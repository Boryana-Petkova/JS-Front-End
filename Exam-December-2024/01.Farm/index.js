function solve(input) {
    const n = parseInt(input[0]); 
    const farmers = {}; 

    
    for (let i = 1; i <= n; i++) {
        const [name, area, tasks] = input[i].split(' ');
        farmers[name] = {
            area: area,
            tasks: tasks.split(','),
        };
    }

    
    for (let i = n + 1; i < input.length; i++) {
        const command = input[i];
        
        if (command === "End") break; 

        const [action, ...args] = command.split(' / ');
        
        if (action === "Execute") {
            const [name, area, task] = args;
            if (farmers[name].area === area && farmers[name].tasks.includes(task)) {
                console.log(`${name} has executed the task: ${task}!`);
            } else {
                console.log(`${name} cannot execute the task: ${task}.`);
            }
        } else if (action === "Change Area") {
            const [name, newArea] = args;
            farmers[name].area = newArea;
            console.log(`${name} has changed their work area to: ${newArea}`);
        } else if (action === "Learn Task") {
            const [name, newTask] = args;
            if (farmers[name].tasks.includes(newTask)) {
                console.log(`${name} already knows how to perform ${newTask}.`);
            } else {
                farmers[name].tasks.push(newTask);
                console.log(`${name} has learned a new task: ${newTask}.`);
            }
        }
    }

    
    Object.keys(farmers).forEach(name => {
        const farmer = farmers[name];
        farmer.tasks.sort(); 
        console.log(`Farmer: ${name}, Area: ${farmer.area}, Tasks: ${farmer.tasks.join(', ')}`);
    });
}


solve( [
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ]
  
  );




