var Employee = /** @class */ (function () {
    function Employee(employeeName, salary, isActive) {
        this.employeeName = employeeName;
        this.salary = salary;
        this.isActive = isActive;
    }
    Employee.prototype.getNetSalary = function () {
        var netsal;
        if (this.isActive == true) {
            if (this.salary < 10000) {
                netsal = this.salary - (this.salary * 10 / 100);
            }
            else {
                netsal = this.salary - (this.salary * 15 / 100);
            }
        }
        else {
            netsal = 0;
        }
        return netsal;
    };
    return Employee;
}());
;
// objects
var emp1;
emp1 = new Employee('John', 8000, true);
console.log(emp1);
console.log(emp1.employeeName);
console.log(emp1.salary);
console.log(emp1.isActive);
console.log(emp1.getNetSalary());
var emp2;
emp2 = new Employee('Miller', 17000, true);
console.log(emp2);
console.log(emp2.employeeName);
console.log(emp2.salary);
console.log(emp2.isActive);
console.log(emp2.getNetSalary());
var emp3;
emp3 = new Employee('Jones', 5600, false);
console.log(emp3);
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.getNetSalary());
