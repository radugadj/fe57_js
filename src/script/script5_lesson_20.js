// Lesson 20

// Task 1

const colors = ['red', 'green', 'blue'];

console.log("Длина массива colors:", colors.length);

// Task 2

const animals = ['monkey', 'dog', 'cat'];

console.log("Последний элемент массива animals:", animals[animals.length - 1]);

// Task 3

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log("Результат после удаления:", numbers);

// Task 4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');

students.shift();
students.unshift('Andrey');

console.log("Результат:", students);

// Task 5

const cats = ['Gachito', 'Tom', 'Batman'];

console.log("Вывод элементов массива через цикл for:");
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

console.log("Вывод элементов массива через цикл for..of:");
for (let cat of cats) {
    console.log(cat);
}

// Task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];


const allNumbers = evenNumbers.concat(oddNumbers);

console.log("Объединенный массив чисел:", allNumbers);

const index = allNumbers.indexOf(8);

if (index !== -1) {
    console.log("Индекс числа 8 в объединенном массиве:", index);
} else {
    console.log("Число 8 не найдено в объединенном массиве");
}

// Task 7

const binary = [0, 0, 0, 0];

const binaryString = binary.reduce((acc, bit) => {
    if (bit === 0) {
        acc += '01';
    } else {
        acc += '1';
    }
    return acc;
}, '');

console.log(binaryString);