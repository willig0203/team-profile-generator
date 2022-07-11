const Employee = require("../lib/Employee.js");

describe("employee", () => {
    const employee = new Employee('n', 'i', 'e');
    test("employee", () => {
        expect(employee.getName).toBe('n');
        expect(employee.getId).toBe('i');
        expect(employee.getEmail).toBe('e');
        expect(employee.getRole).toBe('Employee');
        }
    )
});
