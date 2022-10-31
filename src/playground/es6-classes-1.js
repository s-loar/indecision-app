class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Steve', 34);
console.log(me.getGreeting());
console.log(me.getDescription());

const you = new Person();
console.log(you.getGreeting());
console.log(you.getDescription());
