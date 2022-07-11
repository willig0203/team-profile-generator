const Employee = require("../lib/Employee.js");

module.exports = class Manager extends (Employee) {
    constructor(employee, officeNumber) {
        super();
        this.employee = employee;
        this.officeNumber = officeNumber;
    }
    get getRole() {
        return "Manager";
    }
    get getOfficeNumber() {
        return this.officeNumber;
    }
};