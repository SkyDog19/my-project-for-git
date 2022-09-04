"use strict";
/* jshint -W097 */

const numberOfFolms = +prompt("Сколько фильмов вы уже посмотрели", "");


const personalMovieDB = {
    count: numberOfFolms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};


const questionLastFilm = prompt("Один из последних просмотренных фильмов", ""),
    questionFilmScore = prompt("На сколько оцените его?", ""),
    questionLastFilmTwo = prompt("Один из последних просмотренных фильмов", ""),
    questionFilmScoreTwo = prompt("Один из последних просмотренных фильмов", "");

personalMovieDB.movies[questionLastFilm] = questionFilmScore;
personalMovieDB.movies[questionLastFilmTwo] = questionFilmScoreTwo;

console.log(personalMovieDB);
console.log('Создаем коммит');