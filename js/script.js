const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", '');
const ratingFilm = prompt("На сколько оцените его?", '');

personalMovieDB.movies[lastFilm] = ratingFilm;
console.log(personalMovieDB);

