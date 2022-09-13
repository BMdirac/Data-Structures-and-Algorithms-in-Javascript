// *********************** Stack (revision) *********************
// class Stack {
//     constructor() {
//         this.data = [];
//     }
//     push(value) {
//         this.data.push(value);
//     }
//     pop() {
//         let value = this.data.pop();
//         return value
//     }
//     size() {
//         return this.data.length
//     }
// }
// let myStack = new Stack();
// myStack.push("Beng");
// console.log(myStack.size());
// myStack.pop();
// console.log(myStack.size());

// *********************** Queue (revision) *********************
// class Queue {
//     constructor() {
//         this.index = 0;
//         this.data = [];
//     }
//     push(value) {
//         this.data.push(value)
//     }
//     pop() {
//         let value = this.data[this.index];
//         if(this.index < this.data.length) {
//             this.index++
//         }
//         return value
//     }
//     size() {
//         let length = this.data.length - this.index;
//         return length
//     }
// }
// let myLine = new Queue();
// myLine.push("Beng");
// console.log(myLine.size());
// myLine.pop();
// console.log(myLine.size());

// *********************** Class with Method(functions in class) (revision) *********************
// Methods here are: sayHello(), sayHelloToSomeone(), introduce()
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log("Hi")
//     }
//     sayHelloToSomeone(person) {
//         console.log("Hello " + person.name)
//     }
//     introduce() {
//         console.log("My name is " + this.name  + " and my age is " + this.age)
//     }
// }
// let myFirstPerson = new Person("Ben", 25);
// let mySecondPerson = new Person("John", 23);
// myFirstPerson.sayHello();
// myFirstPerson.sayHelloToSomeone(mySecondPerson);
// myFirstPerson.introduce();
// mySecondPerson.introduce();

// *********************** Class (revision) *********************
// Stack and Queue are built in classes
// They have methods in them such as: push(), pop() and size()

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let myFirstPerson = new Person("Ben", 25);
// console.log(myFirstPerson);

// *********************** Object (revision) *********************
// let myObject = [];
// myObject.name = "Ben";
// myObject.age = 25;
// myObject['height'] = 90;
// console.log(myObject);
// delete myObject.age;
// console.log(myObject)

// *********************** Array (revision) *********************
// let myArray = [];
// myArray.push(9)
// myArray.push('Ben')
// myArray.push(true)
// myArray[3] = "Beng";
// console.log(myArray)
// // myArray.pop()
// // console.log(myArray)

// for (let i = 0; i < myArray.length; i++) {
//     // console.log(i);
//     console.log(myArray[i]);
// }

// for (let value of myArray) {
//     console.log(value)
// }


// *********************** Sets (revision) *********************
// let inputs = [1,2,4,4,5,1,3]

// function uniqueValue(inputs) {
//     let array = new Set()
//     for (let value of inputs) {
//         array.add(value)
//         console.log(array)
//     }
//     return array
// }

// uniqueValue(inputs)

// *********************** Map (revision) *********************
// let input = [1,2,4,4,5,1,3] 

// function myMap(e) {
//     let map = new Map() 
//     for (let key of e) {
//         if(map.has(key)) {
//             let oldValue =  map.get(key) 
//             map.set(key, oldValue + 1)
//         } else {
//             map.set(key, 1)
//         }
//         console.log(map)
//     }
//     return map
// }

// myMap(input)