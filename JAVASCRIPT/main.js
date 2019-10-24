const fruits = ['apples','oranges']

fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();

console.log(Array.isArray(fruits))
console.log(Array.isArray('fruits'))

console.log(fruits.indexOf('oranges'))

console.log(fruits);

/* const name='alex';
const age=30;

const hello = `My name is ${name} and I am ${age}`;

console.log(hello); */