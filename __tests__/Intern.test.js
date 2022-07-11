const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

describe("intern", () => {
    const employee = new Employee('n', 'i', 'e');
    const intern = new Intern(employee, 's');
    test("intern", () => {

        expect(intern.employee.getName).toBe('n');
        expect(intern.employee.getId).toBe('i');
        expect(intern.employee.getEmail).toBe('e');

        expect(intern.getSchool).toBe('s');

        expect(intern.getRole).toBe('Intern');

        }
    )
});