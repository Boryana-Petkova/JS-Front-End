function solve (input){

    let movies = {};

    input.forEach(line => {
        if (line.startsWith('addMovie')) {
            
            let movieName = line.split('addMovie ')[1];
            if (!movies[movieName]) {
                movies[movieName] = { name: movieName };
            }
        } else if (line.includes('directedBy')) {
           
            let [movieName, director] = line.split(' directedBy ');
            if (movies[movieName]) {
                movies[movieName].director = director;
            }
        } else if (line.includes('onDate')) {
            
            let [movieName, date] = line.split(' onDate ');
            if (movies[movieName]) {
                movies[movieName].date = date;
            }
        }
    });
    
    Object.keys(movies).forEach(movie => {
        let movieInfo = movies[movie];
        if (movieInfo.name && movieInfo.director && movieInfo.date) {
            console.log(JSON.stringify(movieInfo));
        }
    });
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );