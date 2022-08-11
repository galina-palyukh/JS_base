// TASKS:

const numbers = [10, 20, 15, 5];

// 1. Остаток от деления на 2

function restArray(arr) {
    let arrResult = arr.map(value => value % 2);
    console.log(arrResult);
}
restArray(numbers); // [0, 0, 1, 1];


// 2. Вернуть массив: если парное true, непарное false

 function restArrayBoolean(arr) {
  let newArray = arr.map(value => !(value % 2));
  console.log(newArray);
}
restArrayBoolean(numbers); // [true, true, false, false];


// 3. Вернуть массив только с четными числами

function filterOddNumber(arr) {
  let evenNumbers = arr.filter(value => !(value % 2));
  console.log(evenNumbers);
}
filterOddNumber(numbers); // [10, 20];

// It's the same:
// const condition_1 = !(value % 2);
// const condition_2 = value % 2 === 0;


// 4. Перевернуть слово
// Все строки в JavaScript являются итерируемыми объектами, а значит могут быть приведены к массиву с помощью оператора spread ...
//Либо использовать спец метод .split (он разбивает стринг на массив со значениями, опираясь на сепаратор внутри

// 1st way:
 function revertString(word) {
  return word.split('').reverse().join("");
}
console.log(revertString('Hello'));

 // 2nd way:
function revertString(word) {
    let arrayLetters = [...word].reverse().join("");
    console.log(arrayLetters);
}
revertString('Hello');