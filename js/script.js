"use strict";
/* jshint -W097 */
const personalMovieDB = {
    count: {},
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
(personalMovieDB.count < 10) ? console.log('Просмотрено довольно мало фильмов'):
    (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? console.log('Вы классический зритель') :
    (personalMovieDB.count > 30) ? console.log('Вы киноман') : console.log('Произошла ошибка');


for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
}

console.log(personalMovieDB);