//KEY WORD "THIS" (CONTEXT)

// let user = { name: "Джон" };
// let admin = { name: "Админ" };
//
// function sayHi() {
//     alert( this.name );
// }
//
// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)
//
// admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)


// const user = {
//     name: 'Viktor',
//     say: function (phrase) {
//         console.log(`${this.name} says ${phrase}`);
//         // console.log(user.name + " says " + phrase);
//
//     }
// };
//
// user.say('Hello!'); // Viktor says Hello!


// const user = {
//     name: 'Viktor',
//     say: function (phrase) {
//         this.name = this.name + "!";
//
//         console.log(`${this.name} says ${phrase}`);
//         return ["abc", "qwer"];
//     }
// };
//
// // user.say('Hello!').say('Hello again!');
//
//
//
// user.say('Hello!').map(value => value.toUpperCase())


// За допомогою виклику функції через new ми можемо отримати доступ до методів та властивостей «класу» Car

// function Car(name) {
//     this.modelName = name;
//
//     this.startEngine = function () {
//         console.log(`${this.modelName}'s engine is running!`);
//     }
// }
//
// const myCar = new Car('Toyota');
// myCar.startEngine(); // Toyota engine is running
//
// const mazda = new Car("Mazda");
// mazda.startEngine();

// ❗Важливо❗ this у новоствореній функції через new буде посилатись на об’єкт класу Car

// function Animal(type) {
//     this.typeAnimal = type;
//     this.startMoving = function () {
//         console.log(this.typeAnimal + " is moving" + "!");
//     }
// }
//
// const turtle = new Animal("Turtle");
// turtle.startMoving();
//
// const elephant = new Animal("Elephant");
// elephant.startMoving();


// const user = {
//     name: "Danylo",
//     sayHello: function (firstName, age) {
//         console.log(`Hello, I am - ${this.name} ${firstName} ${age}`);
//     }
// };
//
// const f = user.sayHello;
// f.call(user,"Smith");
//
// f.call(user,25);
// f.apply(user,[25]);


// CLASS
class SuperCar {

    minSpeed = "250 km/h";

    constructor(name, color, age, price) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.price = price;
    }

    buy(price) {

        if (price >= this.price) {
            console.log(`Congratulation!!! You have bought car with name: ${this.name}, color: ${this.color}, age: ${this.age}, price: ${this.price}`);
        }
    }
}

let mazda = new SuperCar("Mazda", "blue", 3, 30000);

mazda.buy(40000);






