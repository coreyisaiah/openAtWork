class Dog {
    constructor(name, isSitting){
        this.name = name
        this.isSitting = isSitting
    }

    stand(){
        this.isSitting = false;
        return `${this.name} is now standing`
    }
}

let dog = new Dog("Bowser", true);

// Bowser starts out sitting
console.log(dog.isSitting); // prints `true`

// // Let's make him stand
 console.log(dog.stand()); // prints `false`

// // He's actually standing now!
console.log(dog.isSitting); // prints `false`