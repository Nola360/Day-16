// // Object literal
// const person = {
//   name: "Lebron", age: "23"
// }

// MULTIPLE INSTANCES OF AN OBJECT - CONSTRUCTOR

// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

  }

  console.log(this);

}
// This pertains to the scope

// INSTANCIATE AN OBJECT
// const lebron = new Person('Lebron James', 36);
// const kevin = new Person('Kevin Durant', 30);
// const kyrie = new Person('Kyrie Irving', 25);

// console.log(kevin.age);

// Contructor
// const ak = new Person('Akinola O Daramola Jr.', '12/31/1987');
// console.log(ak.calculateAge());

// String name
const name1 = "James";
const name2 = new String('James');

name2.firstName = 'Lebron';
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

// The value is jeff 
if (name1 === "James") {
  console.log('yes this is a string type')
} else {
  console.log('no');
}

// But the type of value does not match string
if (name2 === "James") {
  console.log('yes')
} else {
  console.log('no this an object type not a string');
}

// NUMBERS
// Number
const num1 = 5;
console.log(typeof num1);

// Object
const num2 = new Number(5);
console.log(typeof num2);

// BOOLEAN
// Boolean
const bool1 = true;
console.log(typeof bool1);

// Object
const bool2 = new Boolean(true);
console.log(typeof bool2);

// Function
const getSum1 = function (x, y) {
  return x + y;
}

console.log(typeof getSum1(1, 1));


const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1, 1));


// OBJECTS
const john1 = { name: 'John' };
console.log(john1);


const john2 = new Object({ name: 'John' });
console.log(john2);


// ARRAYS
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// Regular Expressions
const reg1 = /\w+/;
console.log(reg1);

// Double backslash to escape
const reg2 = new RegExp('\\w+');
console.log(reg2);

// Prototype is an object 
// Example Person.prototype
// Object Literals inherited from ;[]object prototype




function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.age = age;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);

}


// Putting info in prototype
// Calculate Age
const jamie = new Person('Jamie', 'Bond', '12/31/2020');
const jane = new Person('Jane', 'Boon', 'November 31, 3030');


Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log(jamie.calculateAge());

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(jamie.getFullName());

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
}

jane.getsMarried('Bond');
console.log(jane.getFullName());

// HhsOwnPropertyMethod in prototype
console.log(jane.hasOwnProperty('firstName'));

// Will run as false because its not a property just in prototype
console.log(jamie.hasOwnProperty('getFullName'));