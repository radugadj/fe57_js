// Урок 17 
// Домашнее задание

// Задание 1

function getSum(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

let result = getSum(100);
console.log(result);


// Задание 2


function calculateOverpayment(loanAmount) {
    const annualInterestRate = 17 / 100;
    const numberOfYears = 5;
    const totalOverpayment = loanAmount * annualInterestRate * numberOfYears;

    return totalOverpayment;
}


let loanAmount = 10000;
let overpayment = calculateOverpayment(loanAmount);
console.log("Переплата по кредиту составит: " + overpayment.toFixed(2) + " у.е.");


// Задание 3


function trimString(str, from, to) {
    if (from < 0 || from > str.length || to < 0 || to > str.length || from > to) {
        return "Ошибка: недопустимые значения 'от' и 'по'.";
    }
    return str.substring(from, to);
}

let string = "Маша купила пять килограмм яблок";
let trimmedString = trimString(string, 3, 9);
console.log(trimmedString);


// Задание 4

function getSumNumbers(number) {
    let sum = 0;
    let strNumber = number.toString();
    for (let i = 0; i < strNumber.length; i++) {
        sum += parseInt(strNumber[i]);
    }

    return sum;
}

let number = 2024;
let sum = getSumNumbers(number);
console.log("Сумма цифр числа " + number + ": " + sum);



// Задание 5

function getSum(a, b) {
    if (a === b) {
        return a;
    }

    let sum = 0;
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));

// Задание 6


function fooBoo(bool, foo, boo) {
    if (bool) {
        foo();
    } else {
        boo();
    }
}

function foo() {
    console.log("Я функция foo");
}

function boo() {
    console.log("Я функция boo");
}

fooBoo(true, foo, boo);
fooBoo(false, foo, boo);


// Продвинутый уровень Задача 2


function breakChocolate(n, m) {
    if (n <= 0 || m <= 0) {
        return 0;
    } else {
        return (n * m) - 1;
    }
}

console.log(breakChocolate(2, 1));
console.log(breakChocolate(3, 1));
console.log(breakChocolate(0, 5));
console.log(breakChocolate(4, 4));

