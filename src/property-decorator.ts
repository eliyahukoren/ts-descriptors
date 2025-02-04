import {ReadonlyProperty} from './decorators';


class Person {
  @ReadonlyProperty
  name: string = "Default";

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");
console.log(person.name);

// This will throw an error in strict mode
// person.name = "Bob";
