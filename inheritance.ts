class Person {
    personName: string;
    age: number;

    constructor(personName: string, age: number) {
        this.personName = personName;
        this.age = age;
    }
}

class Employee extends Person {
    salary: number;
    isActive: boolean;

    constructor(personName: string, age: number, salary: number, isActive: boolean) {
        super(personName, age);
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
    new Employee('John', 24, 8000, true),
    new Employee('Miller', 51, 17000, true),
    new Employee('Jones', 36, 5600, false)
]

// adding objects
employees.push(new Employee('Anna', 43, 7300, true));

// objects
for (let i = 0; i < employees.length; i++) {
    console.log('\nemployee');
    console.log(employees[i].personName);
    console.log(employees[i].age);
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary());
}