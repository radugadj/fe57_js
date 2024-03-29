// Урок 17 
// Домашнее задание

// Задание 1

let var1 = 'true'
let var2 = false
let var3 = 17
let var4 = undefined
let var5 = null

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);



// Задание 2


let height = 15
let width = 20

if (height > width) {
    console.log("Наибольшее число: " + height);
} else if (width > height) {
    console.log("Наибольшее число: " + width);
}

// Задание 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Задание 4

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = (key && documents && pen) && (apple || orange);

console.log(shouldGoToWork);

// Задание 5

let number = prompt("Введите число:");

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizBuz");
} else if (number % 3 === 0) {
    console.log("Buz");
} else if (number % 5 === 0) {
    console.log("Fiz");
} else {
    console.log("Число не делится ни на 3, ни на 5 без остатка.");
}

// Задание 6

let age = prompt("Сколько вам лет?")

if (age >= 18) {
    console.log("Попей пивка.");
} else if (age >= 16 && age <= 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори.");
} else {
    console.log("Пей колу.");
}


// Задание 7

let direction = prompt("В какую сторону света вы бы хотели отправиться? (север, юг, запад, восток)");

switch (direction.toLowerCase()) {
    case "юг":
        console.log("На юг пойдешь, счастье найдешь.");
        break;
    case "север":
        console.log("На север пойдешь, много денег найдешь.");
        break;
    case "запад":
        console.log("На запад пойдешь, верного друга найдешь.");
        break;
    case "восток":
        console.log("На восток пойдешь, разработчиком станешь.");
        break;
    default:
        console.log("Вы ввели неверные данные. Пожалуйста, попробуйте еще раз.");
}


// Продвинутый уровень Задача 1

let username = prompt("Введите ваше имя в формате 'пОлИнА нАбЕрЕжНаЯ':");
let correctedUsername = username.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

alert("Привет, " + correctedUsername + "!");