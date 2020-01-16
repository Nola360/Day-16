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
const ak = new Person('Akinola O Daramola Jr.', '12/31/1987');
console.log(ak.calculateAge());

