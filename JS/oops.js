// write a class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `this.name is ${this.name} and this.age is ${this.age}`;
  }
}

const person1 = new Person("John", 20);
console.log(person1.getDetails());
