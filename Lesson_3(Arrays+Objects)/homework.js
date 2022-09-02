let colors = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};

// 1. Преобразовать обьект в массив

// function getKeyValuePairs(colors) {
//     let arr = [];
//     for (let key in colors) {
//         let arrInside = [];
//         arrInside.push(key);
//         arrInside.push(colors[key]);
//         arr.push(arrInside);
//     }
//     return arr;
// }
//
// let colorsArr = getKeyValuePairs(colors);
// console.log(colorsArr);


// 2. Поменять местами ключи и значения в обьекте

function keyValueViceVersa(colors) {
    let obj = {};
    for (let key in colors) {
        let value = colors[key];
        obj[value] = key;
    }
    console.log(obj);
}

keyValueViceVersa(colors);


// getKeyValuePairs(colors);
//[["red", "#FF0000"], ["green", "#00FF00"], ["white", "#FFFFFF"]]


// 2. Поменять местами ключи и значения в обьекте

// function invertKeyValue(colors) {
//
//     let obj = {};
//
//     for (let key in colors) {
//         let value = colors[key];
//         obj[value] = key;
//     }
//
//     console.log(obj);
// }
//
// invertKeyValue(colors);

// { "#FF0000": "red", "#00FF00": "green", "#FFFFFF": "white" }


// // 2. Поменять местами ключи и значения в обьекте
// let colors = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
// function invertKeyValue(colors) {
//
//     for (let key in colors) {
//         // key = 'red'
//         let value = colors[key]; // colors['red'] -> "#FF0000"
//         colors[value] = key; // obj['#FF0000'] -> 'red'
//         delete colors[key];
//         // { '#FF0000': 'red' }
//     }
//
//     console.log(colors);
// }
//
// invertKeyValue(colors);
//
// // { "#FF0000": "red", "#00FF00": "green", "#FFFFFF": "white" }


// 3. Вернуть массив с названиями всех методов встроеного обьекта Math
//
// function getAllMethodsFromObject(obj) {
//
//     let arrAllKeys = Object.getOwnPropertyNames(obj);
//
//     let test = arrAllKeys.filter(value => {
//         return (typeof obj[value] === "function");
//     });
//
//
//     console.log(Object.getOwnPropertyNames(obj));
//
//     console.log(test);
// }
//
// getAllMethodsFromObject(Math);

// for of
// for each
// for


// function getAllMethodsFromObject (obj){
//
//     let arr = [];
//     for (let name in obj){
//         console.log(name);
//         if(typeof obj[name] === "function" ){
//             arr.push(name);
//         }
//     }
//     return arr;
// }
// getAllMethodsFromObject(Math);


//
//     ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]
//
// Math
// Object
// Array






