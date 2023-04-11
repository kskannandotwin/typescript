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
// array of objects
var employees = [
    new Employee('John', 8000, true),
    new Employee('Miller', 17000, true),
    new Employee('Jones', 5600, false)
];
// adding objects
employees.push(new Employee('Anna', 7300, true));
// objects
console.log(employees[0]);
console.log(employees[0].employeeName);
console.log(employees[0].salary);
console.log(employees[0].isActive);
console.log(employees[0].getNetSalary());
console.log(employees[1]);
console.log(employees[1].employeeName);
console.log(employees[1].salary);
console.log(employees[1].isActive);
console.log(employees[1].getNetSalary());
console.log(employees[2]);
console.log(employees[2].employeeName);
console.log(employees[2].salary);
console.log(employees[2].isActive);
console.log(employees[2].getNetSalary());
console.log(employees[3]);
console.log(employees[3].employeeName);
console.log(employees[3].salary);
console.log(employees[3].isActive);
console.log(employees[3].getNetSalary());
