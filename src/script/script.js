'use strict'

// alert("hello world");


// Задание 1
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Задание 2

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

const myAgeInYears = 32; 

const myAgeInSeconds = myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log("Мой возраст в секундах:", myAgeInSeconds);


// Задание 3

let count = 42;
let userName = '42';

let countAsString = count.toString();
let userNameAsNumber = parseInt(userName);

console.log("count как строка:", countAsString); 
console.log("userName как число:", userNameAsNumber); 

// Задание 3 вариант 2

let count2 = 42;
let userName2 = '42';

let countAsString2 = '' + count;
let userNameAsNumber2 = + userName;

console.log("count как строка:", countAsString2);
console.log("userName как число:", userNameAsNumber2); 


// Задание 4
let a = 1;
let b = 2;
let c = ' белых медведей';

let result = a.toString() + b.toString() + c;

console.log(result); 

// Задание 5
let word1 = "морпех";
let word2 = "наледь";
let word3 = "попрек";
let word4 = "рубило";

let lengthWords = word1.length + word2.length + word3.length + word4.length;

console.log("Общая длина слов:", lengthWords);


// Задание 6
let variable1 = "Hello";
let variable2 = 42;
let variable3 = true;

console.log(`Variable: variable1 have type: ${typeof variable1}`);
console.log(`Variable: variable2 have type: ${typeof variable2}`);
console.log(`Variable: variable3 have type: ${typeof variable3}`);



// Задание 7

const name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

console.log("Ваше имя: " + name);
console.log("Ваш возраст: " + age);