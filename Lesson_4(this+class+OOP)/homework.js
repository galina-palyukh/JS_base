function sum(c, d) {
    return this.a + this.b + c + d;
}

const func = sum.bind({a: 1, b: 2});

const result = func(4, 5);

console.log(result); // 12


let useMethodCall = sum.call({a: 1, b: 2}, 10, 30);
let useMethodApply = sum.apply({a: 1, b: 2}, 10, 30);

console.log(useMethodCall); // 12
console.log(useMethodApply); // 12


// bind - создает и не вызывает (

// call - не созд новую функцию

// apply - не созд новую функцию, array