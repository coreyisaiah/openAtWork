const Employee = require('./employee')

let johnWick = new Employee("John Wick", "Dog Lover")

//SayNameFunc
sayNameFunc = johnWick.sayName
sayNameJW = sayNameFunc.bind(johnWick)
setTimeout(sayNameJW, 2000)


//SayJobFunc
sayJobFunc = johnWick.sayOccupation
sayJobJW = sayJobFunc.bind(johnWick)
setTimeout(sayJobJW, 3000)