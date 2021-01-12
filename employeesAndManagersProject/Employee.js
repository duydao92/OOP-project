/*
    1/ Employee constructor.
    2/ Manager class that extends Employee class.
        new attribute that holds arr of employees.
    3/ Method in Employee class that calculate bonus.
        bonus = (employee salary) * multiplier
    4/ Method in Manager that overrides Employee's bonus method.
        bonus = (total salary of all employees) * multiplier
    5/ Instantiate and test.
*/
class Employee {
    constructor(name, salary, title, boss) {
        this.name = name
        this.title = title
        this.salary = salary
        this.boss = boss
        if (boss) {
            boss.addEmployee(this)
        }
    }

    bonus(multiplier) {
        return this.salary * multiplier
    }
}
console.log(Employee)
exports.Employee = Employee
