const arr = [11, 22, 33]
arr.push(90)
console.log(arr) // [11, 23, 44, 90]
console.log(typeof arr) // object

// Iterating over each element of an array using forEach
arr.forEach(function (value) {
  console.log(value)
})

console.log('------')
arr.forEach((value) => console.log(value))

// Iterating over each element of an array using map
console.log('------')
arr.map((val) => console.log(val))

// Creating copy of arrays
const arr2 = [11, 22, 33]
const arr2_copy = arr2.concat(44)
// Here arr2.concat will not add element 44 in arr2 but it crates copy of arr2, adds 44 in it and stores it in arr2_copy
console.log(arr2_copy) // [11, 22, 33, 44]

// Creating html elements using map
const html_el = arr.map((val) => `<li>${val}</li>`)
console.log(html_el)

// Destructuring assignments with arrays
const numbers = [1, 2, 3, 4, 5, 6]
const [fisrt, second, third, ...rest] = numbers
console.log(fisrt)
console.log(second)
console.log(third)
console.log(rest)

// Objects
const obj1 = {
  name: 'John Smith',
  age: 25,
  occupation: 'SDE - 1',
  skills: ['React', 'Nodejs', 'MongoDB', 'Express', 'Docker'],
}

console.log(obj1)

// Accessing the properties of an object
console.log(`Name: ${obj1.name}`)
console.log(`Name: ${obj1['name']}`)

// Changing values of the object properties
obj1.age = 30
console.log(obj1)
obj1['age'] = 35
console.log(obj1)
const { name: fullName, age, occupation, skills: technical_Skills } = obj1
console.log(fullName)
console.log(age)
console.log(occupation)
console.log(technical_Skills)

const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function () {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function (a, b) {
    console.log(a + b)
  },
}

// Calling function from an object
arto.greet()

// Adding function in arto object
arto.growOlder = function (yrs) {
  this.age += yrs
}

arto.growOlder(12)
console.log(arto.age)

// Calling addition function
arto.doAddition(10, 10)

// We can call doAddition by storing a method reference in a variable and calling a method through that variable
const referencedDoAddition = arto.doAddition
referencedDoAddition(20, 20)

// Calling greet method
arto.greet()

// Referenced greet method
const referencedGreet = arto.greet
referencedGreet() // Here the name will be undefined because method loses the knowledge of "this" keyword

// For fixing this we can bind the object ot greet method, in this way the value of "this" is preserved
// Calling arto.greet.bind(arto) creates a new function where this is bound to point to Arto, independent of where and how the method is being called
const referencedGreet2 = arto.greet.bind(arto)
referencedGreet2()

// JS Classes syntax
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`Hi, my name is ${this.name} 👋 `)
  }
}

const prathamesh = new Person('Prathamesh', 23)
prathamesh.greet()

const josh = new Person('Josh', 20)
josh.greet()

/*
Types in JS
Boolean
Null
Undefined
Number
String
Symbol
BigInt
Object
*/
