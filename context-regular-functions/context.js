function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
//eat(); // "undefined eats fish food" (I was right!)


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // Nemo eats fish food (I was right again!)


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // Should be and error or undefined (Undefined eats fish food)


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // Error swim is not a function (TypeError: this is undefined)