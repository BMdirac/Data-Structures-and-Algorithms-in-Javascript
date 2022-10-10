/********************************** REVISION 2 ENDS ***************************/
// ************** Stacks (revision) - learning phase 1 ***************
// var letters = [];
// var word = "FreeCodeCamp";
// var rword = "";
// for (let i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }
// for (let i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }
// // console.log(letters)
// // console.log(rword)
// if (rword === word) {
//     console.log(word + " is a palindrome");
// } else {
//     console.log(word + " is not a palindrome");
// }

// ************** Sets (revision) - learning phase 2 ***************


// ************************************** Learning Phase 3 *******************************************
// *************** Queue ***********************************
// function Queue () {
//     collection = [];
//     this.print = function() {
//         console.log(collection);
//     };
//     this.enqueue = function(element) {
//         collection.push(element);
//     };
//     this.dequeue = function() {
//         return collection.shift();
//     };
//     this.front = function() {
//         return collection[0];
//     };
//     this.size = function() {
//         return collection.length;
//     };
//     this.isEmpty = function() {
//         return (collection.length === 0);
//     };
// }
// var q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

// // using a priory queue to create a queue
// function PriorityQueue() {
//     var collection = [];
//     this.printCollection = function() {
//         (console.log(collection));
//     };
//     this.enqueue = function(element) {
//         if (this.isEmpty()){
//             collection.push(element);
//         } else {
//             var added = false;
//             for (var i = 0; i < collection.length; i++){
//                 if (element[i] < collection[i][i]){// checking priorities
//                     collection.splice(i,0,element);
//                     added = true;
//                     break;
//                 }
//             }
//             if (!added){
//                 collection.push(element);
//             }
//         }
//     };
//     this.dequeue = function() {
//         var value = collection.shift();
//         return value[0];
//     };
//     this.front = function() {
//         return collection[0];
//     };
//     this.size = function() {
//         return collection.length;
//     };
//     this.isEmpty = function() {
//         return (collection.length === 0);
//     };
// }
// var pq = new PriorityQueue();
// pq.enqueue(["Beau Carnes", 2]);
// pq.enqueue(["Quincy Larson", 3]);
// pq.enqueue(["Ewa Mitulska-Wojcik", 1])
// pq.enqueue(["Briana Swift", 2])
// pq.printCollection();
// pq.dequeue();
// pq.front();
// pq.printCollection();


// ************************************** Learning Phase 2 *******************************************
// *************** Sets ***********************************
// the typical use of a set is to check for the presence of an item
// function mySet() {
//     // the var collection will hold the set
//     var collection = [];
//     // this.method will check for the presence of an element and return true or false
//     this.has = function(element) {
//         return (collection.indexOf(element) !== -1);
//     };
//     // this method will return all the values in the set
//     this.values = function() {
//         return collection;
//     };
//     // this method will add an element to the set
//     this.add = function(element) {
//         if(!this.has(element)) {
//             collection.push(element);
//             return true;
//         }
//         return false;
//     };
//     // this method will remove an element from a set
//     this.size = function() {
//         return collection.length;
//     };
//     // this method will return the union of two sets
//     this.union = function(otherSet) {
//         var unionSet = new mySet();
//         var firstSet = this.values();
//         var secondSet = otherSet.values();
//         firstSet.forEach(function(e){
//             unionSet.add(e);
//         });
//         secondSet.forEach(function(e){
//             unionSet.add(e);
//         });
//         return unionSet;
//     };
//     // this method will return the intersection of two sets as a new set
//     this.intersection = function(otherSet) {
//         var intersectionSet = new mySet();
//         var firstSet = this.values();
//         firstSet.forEach(function(e){
//             if(otherSet.has(e)) {
//                 intersectionSet.add(e);
//             }
//         });
//         return intersectionSet;
//     };
//     // this method will return the difference of two sets as a new set
//     this.difference = function(otherSet) {
//         var differenceSet = new mySet();
//         var firstSet = this.values();
//         firstSet.forEach(function(e){
//             if(!otherSet.has(e)){
//                 differenceSet.add(e);
//             }
//         });
//         return differenceSet;
//     };
//     // this method will test if the set is a subset of a different set
//     this.subset = function(otherSet) {
//         var firstSet = this.values();
//         return firstSet.every(function(value){
//             return otherSet.has(value);
//         });
//     }; 
// }
// var setA = new mySet();
// var setB = new mySet();
// setA.add("a");
// setB.add("b");
// setB.add("c");
// setB.add("a");
// setB.add("d");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());

// // using the built in set
// var setC = new Set();
// var setD = new Set();
// setC.add("a");
// setD.add("b");
// setD.add("c");
// setD.add("a");
// setD.add("d");
// console.log(setD.values())
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));

// ************************************** Learning Phase 1 *******************************************
// *************** Stacks ***********************************
// Basic use of a Stack using an Array
// A stack of book is a great example of stack data structure
// functions: push, pop, peek, length
// peek is used for displaying the top element

// var letters = []; // this is our stack
// var word = "racecar"; // use this as well: var word = "FreeCodeCamp";
// var rword = "";
// // put letters of word into stack
// for (var i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }
// // pop off the stack in reverse order 
// for (var i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }
// if (rword === word) {
//     console.log(word + " is a palindrome.");
// }
// else {
//     console.log(word + " is not a palindrome.");
// }

//******* More on Stack *******
// Creates a Stack
// var Stack = function() {
//     this.count = 0;
//     this.storage = {};
//     // Adds a value onto the end of the stack
//     this.push = function(value) {
//         this.storage[this.count] = value;
//         this.count++;
//     }
//     // Removes and returns the value at the end of the stack
//     this.pop = function() {
//         if (this.count === 0) {
//             return undefined;
//         }
//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }
//     this.size = function() {
//         return this.count;
//     }
//     // Returns the value at the end of the stack
//     this.peek = function() {
//         return this.storage[this.count-1];
//     }
// }
// var myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("FreeCodeCamp");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());



/********************************** REVISION 1 ENDS ***************************/
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