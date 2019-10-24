const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'john@gmail.com';


const {firstName, lastName, address: { city }} = person;

console.log(firstName);
console.log(city);
console.log(person);
