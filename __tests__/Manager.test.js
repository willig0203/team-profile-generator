const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

describe("manager", () => {
    const employee = new Employee('n', 'i', 'e');
    const manager = new Manager(employee, 'o');
    test("manager", () => {
        expect(manager.employee.getName).toBe('n');
        expect(manager.employee.getId).toBe('i');
        expect(manager.employee.getEmail).toBe('e');

        expect(manager.getOfficeNumber).toBe('o');

        expect(manager.getRole).toBe('Manager');
        }
    )
});