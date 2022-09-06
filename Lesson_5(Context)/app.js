// function user(name) { //- функция user принимает в качестве аргумента какое-то имя
//     this.name = name; // - через слово this мы делаем эти переменные, методы доступными когда создаем новую ф-ию через ключ. слово new
//     this.age = 25;
//     this.say = function (phrase) {
//         console.log(`${this.name} says ${phrase}`)
//     };
//     return "1234";
// }

// const player = new user ("Victor"); //создаем новую функцию с помощью ключ. слова new
// player.say('I\'m player');
//
//
// const coach = new user ("Alex");
// coach.say('I\'m coach');

// Кожна ф-ія, яка щось повертає повинна мати return, якщо не має return, то повертає undefined

// 2 способа викликати функцію:
// - з ключовім словом new:
// const coach_1 = new user("Alex");// в цьому випадку нам повертається весь контекст(обьект), який лежіть в ключовому слові this, якщо this немає - то повернеться пустий обьект

// - без ключовога слова:
// const coach_2 = user("Alex");// в цьому випадку повертається нам те,що написано в return
// console.log(coach_1, coach_2);


// Example 2

// function user() {
//     console.log(this);
// }
//
// const player = user.bind({name: "Galina"}); // - привязуємо контекст за допомогою метода bind і не викликаємо її відразу а робимо посилання
// player();
//
// //або можно заюзити метод call якщо треба відразу визвати ф-і, він відразу викликає з новим контекстом
// user.call({name: "Galina"});


// Example 3:

// function user() {
//     this.say("Hello world"); // викликаємо ф-ію say з аргументом довільним, в нас це Hello world
// }
//
// const context_player = {
//     name: "Victor",// в нашому контесту є поле name
//     say: function (phrase) { // є поле say, що є ф-єю,яка в себе приймає якусь фразу
//         console.log(this.name + " says " + phrase)// і виводить імя та фразу в консоль // параметр phrase передаємо з середіні ф-ії юзер
//     }
// };
//
// const player = user.bind(context_player); // привязали контекст// ф-ія player посілається на функцію user
// player();// викликали player, а player посилається в свою чергу на ф-ію user з контекстом context_player


// Example 4:

// function user() {
//     this.say.call({name: "Vasyl"}, "Hello world")
// }
//
// const context_player = {
//     name: "Victor",
//     say: function (phrase) {
//         console.log(this.name + " says " + phrase)
//     }
// };
//
// const player = user.bind(context_player);
// player();


// Example 5:
//
// const Animal = function (options) { // раньше таким способом создавали классы
//     //для того чтобы задавать параметры экземплярам класса мы будем передавать их в конструктор
//     //конструктор в даном случае наша function
//     //this в данном случае экземпляр класса Animal, который мы создадим в итоге
//     this.name = options.name; // задаем this.name из options.name
//     this.color = options.color // и задаем this.color из options.color
// };
// //то есть options это у нас обьект, где должны находится св-ва name и color
//
// //для того чтобы использовать класс Animal достаточно создать его экземпляр с помощью ключ слова new
//
// const dog = new Animal({name: "Rex", color: "#fff"});
//
// console.log(dog); //Animal { name: 'Rex', color: '#fff' }
// // ИТОГ: Данная конструкция, которые мы описали в формате класса - она создает нам обьект, а его поля мы задаем через конструктор


// Example 6:

// const Animal = function (options) {
//     this.name = options.name;
//     this.color = options.color;
//     this.voice = function (phrase) {
//         console.log(`Base voice from ${this.name} ${phrase}`);
//     }
//
// };
//
// const dog = new Animal({name: "Rex", color: "#000", });
// dog.voice("phrase");
//
// console.log(dog);

// My Example:

// const Flat = function (street,rooms,colorWalls,price) {
//     this.street = street;
//     this.rooms = rooms;
//     this.colorWalls = colorWalls;
//     this.price = price;
//     this.addRealtorPercent = function (percent) {
//         let realtorPercent = this.price + (this.price/100*percent);
//         console.log( `Including realtor's percent the full price is ${realtorPercent}`);
//     }
// };
//
// const korolenkoFlat = new Flat('Korolenko', 3, "beige", 1000);
// console.log(korolenkoFlat);
// korolenkoFlat.addRealtorPercent(10);
//
//
// const prolisokFlat = new Flat('Prolisok', 1, "beige", 450);
// console.log(korolenkoFlat);
// prolisokFlat.addRealtorPercent(5);




