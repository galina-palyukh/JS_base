//1. Use loop "FOR"

let result;

function doubleMyArrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        value = value * 2
    }
    return arr;
}

result = doubleMyArrayValues([1, 2, 3, 4, 5]); //// [2, 4, 6, 8, 10];

console.log(result);


//2. Use loop "FOR OF"

// let name = "Galina";
//
// for (let a of name) {
//     console.log(a);
// }
//
// let arr = [1, 2, 3, 4, 5,];
//
// for (let a of arr) {
//     console.log(a);
// }
//
// debugger;
//
//
// function doubleMyArrayValues(arr) {
//     let arrayResult = [];
//     for (let a of arr) {
//         a = a * 2;
//         arrayResult.push(a);
//
//     }
//     return arrayResult;
// }
//
// let result = doubleMyArrayValues([1, 2, 3, 4, 5]);
//
// console.log(result);


// let iterable = [10, 20, 30];
//
// for (let value of iterable) {
//     value += 1;
//     console.log(value);
// }
// let person1 = {
//     name: "Galina"
// };
//
// let person2 = {
//     name: "Sergey"
// };
//
// let arr = [person1, person2];
//
// for(let a of arr){
//     a.name = a.name + " Paliukh";
// }


// let person = {
//     name: "Test"
// };
//
// let test = person;
//
// test.name = "John";
//
//
// let number = 1;
// let number2 = number;
//
// number2 = number2 * 2;
// console.log(number);
//
//
//
//
//
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
//
// arr2.push(4);
//
// function getArr(arr) {
//     // arr = [4,5,6];
//     arr.push(5);
// }
//
//
// getArr(arr1);
// console.log(arr1);


// / Array
// // .push
// // for of, for
// // .forEach
// // .map
// function doubleMyArrayValues(arr) {
//
//     return arr;
// }


//1. Use loop "FOR"

// function doubleMyArrayValues(arr) {
//
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }
//
// let result = doubleMyArrayValues([1, 2, 3, 4, 5]);// [2, 4, 6, 8, 10];
// console.log(result);


// 2. Use loop "FOR OF" - для итерируемых обьектов, то есть те которые можно перебирать (массивы, строки ...)
// для обьектов нельзя использовать, так как обьект не явл итерабельным!
// Либо нужно использовать метод Object.key(nameObject) для того чтобы получить массив из ключей нашего обьекта

function doubleMyArrayValues(arr) {

    let arr2 = [];

    for (let value of arr) {

        arr2.push(value * 2);

    }
    return arr2;
}

let result = doubleMyArrayValues([1, 2, 3, 4, 5]);// [2, 4, 6, 8, 10];
console.log(result);


//3. Use "FOR EACH" (метод массивов, который перебирает значения)

// let arr = [1, 2, 3, 4, 5];
//
// arr.forEach((value, index, array) => {
//     value = value * 2;
//     array[index] = value;
//
// });

// console.log(arr);

//3. Use method .Map
//.map() создает новый видоизм. массив

// Метод .map() создает массив, вызывая определенную функцию для каждого элемента родительского массива.
// Метод .map() не использует мутацию и создает новый массив, в отличие от мутационных методов, которые вносят изменения в вызывающий массив.


[1, 2, 3, 4, 5].map(function (value, index, array) {
    value = value * 2;
    array[index] = value;
    return array;

});

// 2 option

arr = [1, 2, 3];
resultMap = arr.map(value => value * 2);
console.log(resultMap);

//если есть фигурные скобки то нужен return
//то есть
arr = [1, 2, 3];
resultMap = arr.map(value => {
    return value * 2;
});

console.log(resultMap);


arr.map(function (value, index) {
    value = value * 2
});


let arr = [1, 2, 3, 4, 5];

let result = arr.map(function (elem) {
    return elem * 2;
});

console.log(result);