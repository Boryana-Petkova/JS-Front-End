
    function solve(input) {
        
        const count = input[0];
        const lastElement  = input[input.length - 1];

        class Song {
            constructor(typeList, name, time){
                this.typeList = typeList;
                this.name = name;
                this.time = time;    
            }
        } 

        input.slice(1, count + 1)  
            .map(songData => songData.split('_'))  
            .map(([typeList, name, time]) => new Song(typeList, name, time))  
            .filter(song => lastElement === "all" || song.typeList === lastElement)  
            .forEach(song => console.log(song.name));  
    }    
    
    solve([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        );
    
