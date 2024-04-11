class Employee{
    constructor(name, occupation){
        this.name = name
        this.occupation = occupation
    }
    sayName(){
        console.log(`${this.name} says hello`)
    }

    sayOccupation(){
        console.log(`${this.name} is a ${this.occupation}`)
    }
}

//let johnWick = new Employee("John Wick", "Dog Lover")
//johnWick.sayOccupation()

module.exports = Employee