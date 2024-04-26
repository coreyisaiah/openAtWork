const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, salary, title, manager = null){
        super(name, salary, title, manager = null)
        this.employees = []
    }

    addEmployee(employee){
        this.employees.push(employee)
    }
}


module.exports = Manager