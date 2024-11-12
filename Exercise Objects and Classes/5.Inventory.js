

function solve (input){
    input.map(line => line.split(' / '))
    .map(([name, level, items]) => ({
        name,
        level: Number(level),
        items
        // or items: items ? items.split(', ') : [] // Превръщаме items в масив от предмети
    //}))
    }))
    .sort((a, b) => a.level - b.level)
    .forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
        //or  console.log(`items => ${hero.items.join(', ')}`); // Присъединяваме предметите обратно като низ
    //});
        
    })
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
    