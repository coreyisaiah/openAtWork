// class Person {
//   constructor(firstName, lastName, age){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }

//   introduce(){
//     console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
//   }

//   static introducePeople(...people){
//     if (Array.isArray(people))
//     for (let i = 0; people.length > 0; i++){
//       person = people[i]
//       person.introduce()
//     }
//     else{
//       console.log("introducePeople only takes an array as an argument.")
//     }
//   }
// }

class Person {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }

  introduce() {
      console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(people) {
      if (!(Array.isArray(people))) {
          throw new Error("introducePeople only takes an array as an argument.");
      }

      for (let person of people) {
          if (!(person instanceof Person)) {
              throw new Error("All items in array must be Person class instances.");
          }
      }

      for (let person of people) {
          person.introduce();
      }
  }
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Doe", 25);
const person3 = new Person("Alice", "Smith", 35);

const peopleArray = [person1, person2, person3, "Hey"];

Person.introducePeople(peopleArray);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}