// Pull in the Employee class/constructor, create tests for employee object, id, email, role

// Require Employee from Employee.js in lib folder

const Employee = require('../lib/Employee');

// Create the employee object and use test data: Jane Doe for employee name, 777 for employee ID, and jdoe@email.com for test email

test('This test creates the employee object and evaluates data type for name, id, email.', () => {
    const employee = new Employee('Jane Doe', 777, 'jdoe@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('This test evaluates the employee name', () => {
    const employee = new Employee('Jane Doe', 777, 'jdoe@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('This test evaluates the employee ID from getId', () => {
    const employee = new Employee('Jane Doe', 777, 'jdoe@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('This test evaluates employee email from getEmail', () => {
    const employee = new Employee('Jane Doe', 777, 'jdoe@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('This tests evaluates role of employee from getRole', () => {
    const employee = new Employee('Jane Doe', 777, 'jdoe@email.com');

    expect(employee.getRole()).toEqual("Employee");
}); 