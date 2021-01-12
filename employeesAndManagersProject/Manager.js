const {
    Employee
} = require('./Employee.js')

class Manager extends Employee {
    constructor(name, salary, title, boss) {
        super(name, salary, title, boss)
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee)
        return employee
    }

    totalSubsalary() {
        let total = 0;
        this.employees.forEach(employee => {
            if (employee instanceof Manager) {
                total += employee.salary + employee.totalSubsalary()
            } else {
                total += employee.salary
            }
        })

        return total;
    }

    bonus(multiplier) {
        return (this.salary + this.totalSubsalary()) * multiplier
    }
}

let hobbes = new Manager('Hobbes', 1000000, 'Founder', null);
let calvin = new Manager('Calvin', 130000, 'Director', hobbes);
let susie = new Manager('Susie', 100000, 'TA Manager', calvin);
let lily = new Employee('Lily', 90000, 'TA', susie);
let clifford = new Employee('Clifford', 90000, 'TA', susie);

console.log(hobbes.bonus(0.05)); // 70500
console.log(calvin.bonus(0.05)); // 20500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05)); // 4500
console.log(hobbes instanceof Manager) // true
console.log(lily instanceof Manager) // false
