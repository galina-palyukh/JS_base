
**Объект** — это совокупность связанных данных; Это ассоциативный массив; 


#### 3 Ways to Copy Objects in JavaScript:
1. Использовать метод встроенного класса Object.assign 
2. Использовать spread(...) оператор 
3. Use the JSON.stringify() and JSON.parse() methods


Точечная запись (Dot notation):

`person.age`

`person.name.first`


Скобочная запись (Bracket notation):

`person['age']`

`person['name']['first']`

С помощью скобочной записи можно динамически задавать не только значения элементов, но и их имена: 

`person[key] = myDataValue;`


#### Методы обьектов:

- hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

- Object.getOwnPropertyNames() возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет), найденными непосредственно в переданном объекте.

`const object1 = {
  a: 1,
  b: 2,
  c: 3
};`
`console.log(Object.getOwnPropertyNames(object1));`
`//expected output: Array ["a", "b", "c"]`



#### Оператор new















