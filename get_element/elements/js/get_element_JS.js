'use strict';

let box = document.querySelector("#box");

console.log(box);

let btns = document.querySelectorAll("button");

console.log(btns);

let circles = document.querySelectorAll(".circle");

console.log(circles);

let hearts = document.querySelectorAll(".heart");

console.log(hearts);

let div = document.createElement("div");
div.style.cssText = "width: 400px; height: 50px; background-color: black;"

document.body.append(div);

hearts[1].after(div);

hearts[1].remove();
