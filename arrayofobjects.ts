class Employee {
    employeeName: string;
    salary: number;
    isActive: boolean;

    constructor(employeeName: string, salary: number, isActive: boolean) {
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

// array of objects
var employees: Employee[] = [
    new Employee('John', 8000, true),
    new Employee('Miller', 17000, true),
    new Employee('Jones', 5600, false)
]

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
