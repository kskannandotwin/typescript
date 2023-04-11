class Employee {
    employeeName: string;
    salary: number;
    isActive: boolean;

    constructor(employeeName: string, salary: number, isActive: boolean){
        this.employeeName = employeeName;
        this.salary = salary;
        this.isActive = isActive;
    }

    getNetSalary(): number {
        let netsal: number;
        if (this.isActive == true) {
            if (this.salary < 10000) {
                netsal = this.salary - (this.salary * 10 / 100);
            } else {
                netsal = this.salary - (this.salary * 15 / 100);
            }
        } else {
            netsal = 0;
        }
        return netsal;
    }
};

// objects
var emp1: Employee;
emp1 = new Employee('John', 8000, true);

console.log(emp1);
console.log(emp1.employeeName);
console.log(emp1.salary);
console.log(emp1.isActive);
console.log(emp1.getNetSalary());

var emp2: Employee;
emp2 = new Employee('Miller', 17000, true);

console.log(emp2);
console.log(emp2.employeeName);
console.log(emp2.salary);
console.log(emp2.isActive);
console.log(emp2.getNetSalary());

var emp3: Employee;
emp3 = new Employee('Jones', 5600, false);

console.log(emp3);
console.log(emp3.employeeName);
console.log(emp3.salary);
console.log(emp3.isActive);
console.log(emp3.getNetSalary());
