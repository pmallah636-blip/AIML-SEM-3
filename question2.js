

class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}


class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

   
    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}


let emp = new Employee(101, "Rahul", 30000);
let manager = new Manager(102, "Prince", 50000, 10000);


console.log("Employee Name:", emp.name);
console.log("Employee Salary:", emp.calculateSalary());

console.log("----------------------");

console.log("Manager Name:", manager.name);
console.log("Manager Salary:", manager.calculateSalary());

