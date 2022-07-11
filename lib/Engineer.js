const Employee = require("../lib/Employee.js");

module.exports = class Engineer extends (Employee) {
    constructor(employee, github) {
        super();
        this.employee = employee;
        this.github = github; // github user name
    }
    get getGithub() {
        return this.github
    }
    get getRole() {
        return "Engineer";
    }
}