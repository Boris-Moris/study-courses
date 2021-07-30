/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo__adv = document.querySelector(".promo__adv");
promo__adv.remove();

let genre = document.querySelector(".promo__genre");
genre.innerHTML = "<h3>Драма</h3>"

let promo__bg = document.querySelector(".promo__bg");
promo__bg.style.background = "url('./img/bg.jpg') center center/cover no-repeat";

let sortMovies = movieDB.movies.sort();
console.log(sortMovies);

let promo_interactive_item = document.querySelectorAll(".promo__interactive-item");
console.log(promo_interactive_item);
promo_interactive_item.forEach((item, index) => item.innerHTML = `${index + 1}. ${sortMovies[index]}`)
