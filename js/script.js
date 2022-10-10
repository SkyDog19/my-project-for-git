"use strict";
/* jshint -W097 */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    }

    // isNaN(numberOfFilms) - если пользователь ввёл НЕ число, то результат будет true
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    (personalMovieDB.count < 10) ? console.log('Просмотрено довольно мало фильмов'):
        (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? console.log('Вы классический зритель') :
        (personalMovieDB.count > 30) ? console.log('Вы киноман') : console.log('Произошла ошибка');
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let answerGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[`${i - 1}`] = `Жанр ${i}: ${answerGenres}`;
    }
}

writeYourGenres();