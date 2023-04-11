// create child class that implements the IEmployee interface
var Employee = /** @class */ (function () {
    function Employee() {
    }
    // implement getTax method of IEmployee interace
    Employee.prototype.getTax = function () {
        return this.salary * 10 / 100;
    };
    return Employee;
}());
// create object of child class
var emp = new Employee();
emp.salary = 10000;
console.log(emp.salary); // output: 10000
console.log(emp.getTax()); // output: 1000
