/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

//let obj = {
//    a: prompt("Один из последних просмотренных фильмов?", "logan"),
//    b: +prompt('На сколько оцените его?', "10"),
//    c: prompt("Один из последних просмотренных фильмов?", "spider-man"),
//    d: +prompt('На сколько оцените его?', "10"),
//}
//
//personalMovieDB.movies[obj.a] = obj.b;
//personalMovieDB.movies[obj.c] = obj.d;
//
//console.log(personalMovieDB);

//for (let i = 0; i < 2; i++) {
//    let a = prompt("Один из последних просмотренных фильмов?", "logan"),
//        b = +prompt('На сколько оцените его?', "10");
//
//    if (!a || !b || a == "" || b == "" || a.length > 50) {
//        alert("Повторите попытку");
//        i--;
//    } else {
//        alert("Готово");
//        personalMovieDB.movies[a] = b;
//    }
//    if (i > 0 && Object.keys(personalMovieDB.movies).length < 2) {
//        alert("Вы ввели тот же фильм, введите другой");
//        i--;
//    }
//}

//let i = 0;
//while (i < 2) {
//    let a = prompt("Один из последних просмотренных фильмов?", "logan"),
//        b = +prompt('На сколько оцените его?', "10");
//
//    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50 && b > 0) {
//        personalMovieDB.movies[a] = b;
//        alert("Good.");
//        if (i > 0 && Object.keys(personalMovieDB.movies).length < 2) {
//            alert("You entered the same movie. Try again.");
//            i--;
//        }
//        i++;
//    } else {
//        alert("You made a mistake. Try again.");
//        i--;
//    }
//}


let check = () => {
    let i = 0;
    do {
        let a = prompt("Один из последних просмотренных фильмов?", "logan"),
            b = +prompt('На сколько оцените его?', "10");

        if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50 && b > 0) {
            personalMovieDB.movies[a] = b;
            alert("Good");
            if (i > 0 && Object.keys(personalMovieDB.movies).length < 2) {
                alert("You entered the same movie.Try again");
                i--;
            }
            i++
        } else {
            alert("You made mistake. Try again.");
            i--;
        }
    } while (i < 2);
}

let checkPersonLvl = () => {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        alert("Мало");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классик");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Ошибка");
    }
}

let genres = () => {
    for (let i = 0; i < 3; ++i) {
        let question = prompt(`Ваш любимый жанр под номером ${i + 1}`, "Ужас");
        personalMovieDB.genres[i] = question;
    }
}

genres();

console.log(personalMovieDB);
