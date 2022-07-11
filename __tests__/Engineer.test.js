const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

describe("engineer", () => {
    const employee = new Employee('n', 'i', 'e');
    const engineer = new Engineer(employee, 'g');
    test("engineer", () => {

        expect(engineer.employee.getName).toBe('n');
        expect(engineer.employee.getId).toBe('i');
        expect(engineer.employee.getEmail).toBe('e');

        expect(engineer.getGithub).toBe('g');
        expect(engineer.getRole).toBe('Engineer');
        
        }
    )
});