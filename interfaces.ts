// create interface
interface IEmployee {
    salary: number;
    getTax(): number;
}

// create child class that implements the IEmployee interface
class Employee implements IEmployee {

    // implement salary property of IEmployee interface
    salary: number;

    // implement getTax method of IEmployee interace
    getTax(): number {
        return this.salary * 10 / 100;
    }
}

// create object of child class
var emp: IEmployee = new Employee();
emp.salary = 10000;
console.log(emp.salary); // output: 10000
console.log(emp.getTax()); // output: 1000
