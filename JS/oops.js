// // class Hayat {
// //   constructor(name, rollno) {
// //     this.name = name;
// //     this.rollno = rollno;
// //   }

// //   printName() {
// //     console.log(this);
// //     return `my name is ${this.name} and my roll no is ${this.rollno}`;
// //   }

// //   newNameFunc = () => {
// //     console.log(this);
// //     return `my name is ${this.name} and my roll no is ${this.rollno}`;
// //   };
// // }

// // let nameData = new Hayat('hayat', 5);

// // console.log(nameData.printName());
// // console.log(nameData.newNameFunc());

// // Function constructor
// // function Person(name, age) {
// //   // Assign properties
// //   this.name = name;
// //   this.age = age;

// //   // Method to introduce the person
// //   this.introduce = function () {
// //     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
// //   };
// // }

// // // Create instances of the constructor
// // const person1 = new Person("John", 25);
// // const person2 = new Person("Alice", 30);

// // // Call methods on the instances
// // person1.introduce(); // Output: Hi, my name is John and I am 25 years old.
// // person2.introduce(); // Output: Hi, my name is Alice and I am 30 years old.

const obj = {
  name: 'Test Object',
  arrFunc: () => {
    console.log('Arrow Function:', this.name); // `this` is inherited (lexical scope)
  },
  convFunc: function () {
    console.log('Conventional Function:', this.name); // `this` refers to `obj`
  },
};

// //obj.arrFunc(); // Output: `this` refers to the outer scope (e.g., global or undefined)
// obj.convFunc(); // Output: `this` refers to `obj`

// //arrFunc();
// //convFunc();

console.log(obj.arrFunc());
