// Урок 19 
// Домашнее задание

// Задание 1


let myObject = {
    key1: 'значение1',
    key2: 'значение2'
};

console.log('Исходный объект:', myObject);

delete myObject.key1;
delete myObject.key2;

console.log('Объект после удаления ключей:', myObject);



// Задание 2



let myObjectKeys = {
    key1: 'значение1',
    key2: 'значение2'
};
if ('key1' in myObjectKeys) {
    console.log(true);
} else {
    console.log(false);
}


// Задание 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
};

// Выводим все ключи
console.log('Ключи объекта:');
for (let key in student) {
    console.log(key);
}

// Выводим значения ключей
console.log('Значения ключей объекта:');
for (let key in student) {
    console.log(student[key]);
}

// Задание 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);


// Задание 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
};

let totalSalary = 0;
let numberOfEmployees = 0;

for (let employee in salaries) {
    totalSalary += salaries[employee];
    numberOfEmployees++;
}

let averageSalary = totalSalary / numberOfEmployees;
console.log('Средняя зарплата сотрудников:', averageSalary);

// Задание 6

let userData = {};
function registerUser() {
    let username = '';
    let password = '';
    while (username === '' || password === '') {
        username = prompt("Введите логин:");
        password = prompt("Введите пароль:");
    }
    userData.username = username;
    userData.password = password;
}

function validateUser() {
    let confirmUsername = prompt("Введите логин для подтверждения:");
    let confirmPassword = prompt("Введите пароль для подтверждения:");
    if (confirmUsername === userData.username && confirmPassword === userData.password) {
        console.log("Добро пожаловать!");
    } else {
        console.log("Ошибка: неправильный логин или пароль.");
    }
}

registerUser();
validateUser();



// Задание 1 Продвинутый уроверь

function translateScore(score) {
    const goals = score.split(':');
    const homeTeamGoals = parseInt(goals[0]);
    const awayTeamGoals = parseInt(goals[1]);

    const numbersInWords = {
        0: 'ноль',
        1: 'один',
        2: 'два',
        3: 'три',
        4: 'четыре',
        5: 'пять',
        6: 'шесть',
        7: 'семь',
        8: 'восемь',
        9: 'девять'
    };

    const homeTeamGoalsWord = numbersInWords[homeTeamGoals];
    const awayTeamGoalsWord = numbersInWords[awayTeamGoals];

    console.log(`Результат матча: ${homeTeamGoalsWord} - ${awayTeamGoalsWord}`);
}
translateScore("2:5"); 