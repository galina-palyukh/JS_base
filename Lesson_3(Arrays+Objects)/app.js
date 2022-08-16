// // 3 Ways to Copy Objects in JavaScript:
//
// // 1.Использовать метод встроенного класса Object.assign :
//
// let user_1 = {name: "Galina", age: 25};
// let employee = {position: "Dev", exp: 5};
//
// let user_2 = Object.assign({}, user_1, employee);
// user_2.name = "Halyna";
// console.log(user_2);
// console.log(user_1);
//
//
//
//
// // 2. Использовать spread(...) оператор :
//
// let pen = {color: "black", material: "plastic"};
// let marker = {...pen};
//
// marker.color = "blue";
// console.log(pen);
// console.log(marker);
//
//
//
// //3.Use the JSON.stringify() and JSON.parse() methods
//
// // JSON.parse() - со строки в обьект
// // Example:
// // let string = '{"name": "Serge"}';
// // let person = JSON.parse(string);
// // console.log(person.name);
//
// // JSON.stringify() - с обьекта в строку
//
// let table = {
//     color: "brown",
//     material: "wood",
//     chair: {
//         color: "brown",
//         material: "wood",
//     },
//     getColor: function () {
//
//     }
// };
//
// let tableString = JSON.stringify(table);
// console.log(tableString);
//
// let tableNew = JSON.parse(JSON.stringify(table));//Сначала  с помощью метода JSON.stringify() из обекта делаем стоку, а после с JSON.parse в обьект
// table.color = "white";
// console.log(tableNew);
//




class Animal {

    name = "";

    constructor(name) {
        console.log("initiated");
        this.name = name
    }
}


let a1 = new Animal("fox");
let a2 = new Animal("cat");

console.log(a1.name);






