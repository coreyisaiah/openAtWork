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

//console.log(nemo)

/********************************* Scenario 1 *********************************/
//eat(); // "undefined eats fish food" 
//(I was right!...the context is the global obj there's no name on the global obj)


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;          //is this a binding???
// nemo.eat(); 
// // Nemo eats fish food (I was right again! ?because the context is within the nemo object?)


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // Should be and error or undefined (Undefined eats fish food)


/********************************* Scenario 4 *********************************/
//nemo.swim(); // Nemo swimming in the water 
//swim is by default one of nemo's methods


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // error because the context isn't explicity