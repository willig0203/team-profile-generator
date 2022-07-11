const Employee = require("../lib/Employee.js");

module.exports = class Intern extends (Employee) {
    constructor(employee, school) {
        super();
        this.employee = employee;
        this.school = school;
    }
    get getSchool() {
        return this.school;
    }
    get getRole() {
        return "Intern";
    }
}