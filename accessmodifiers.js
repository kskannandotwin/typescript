var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(personName, age, salary, isActive) {
        var _this = _super.call(this, personName, age) || this;
        _this.salary = salary;
        _this.isActive = isActive;
        console.log(_this.personName);
        return _this;
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
}(Person));
;
// array of objects
var employees = [
    new Employee('John', 24, 8000, true),
    new Employee('Miller', 51, 17000, true),
    new Employee('Jones', 36, 5600, false)
];
// adding objects
employees.push(new Employee('Anna', 43, 7300, true));
// objects
for (var i = 0; i < employees.length; i++) {
    console.log('\nemployee');
    // console.log(employees[i].personName);
    console.log(employees[i].age);
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary());
}
