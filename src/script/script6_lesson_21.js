// Lesson 21
// Task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


function printFibonacci(element) {
    console.log(element);
}

console.log("С использованием Function Declaration:");
fibonacci.forEach(printFibonacci);

console.log("С использованием Arrow Function:");
fibonacci.forEach(element => console.log(element));


// Task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

function createMemberString(user, index) {
    return `member ${index + 1}: ${user}`;
}

const result1 = users.map(createMemberString);
console.log(result1);

const result2 = users.map((user, index) => `member ${index + 1}: ${user}`);
console.log(result2);

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

function isPositive(number) {
    return number >= 0;
}

const resultNumbers = numbers.filter(isPositive);
console.log(resultNumbers);

const resultNumbers2 = numbers.filter(number => number >= 0);
console.log(resultNumbers2);


// Task 4

const fibonacciNew = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function sumReducer(total, currentValue) {
    return total + currentValue;
}

const sum1 = fibonacciNew.reduce(sumReducer, 0);
console.log("Сумма чисел (Function Declaration):", sum1);

const sum2 = fibonacciNew.reduce((total, currentValue) => total + currentValue, 0);
console.log("Сумма чисел (Arrow Function):", sum2);

// Task 5

const numbersNew = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

function findEven(number) {
    return number % 2 === 0;
}

const result3 = numbersNew.find(findEven);
console.log("Первое четное число (Function Declaration):", result3);


const result4 = numbersNew.find(number => number % 2 === 0);
console.log("Первое четное число (Arrow Function):", result4);
