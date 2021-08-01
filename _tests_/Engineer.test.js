// Pull in the Engineer class/constructor, create tests for engineer object, github, role

// Require Engineer from Engineer.js in lib folder 
const Engineer = require('../lib/Engineer');

// Create the engineer object and use test data: Jane Doe for employee name, 777 for employee ID, and jdoe@email.com, and for test email, and jdoedevlvr for github username.

test('This test creates the Engineer object', () => {
    const engineer = new Engineer('Jane Doe', 777, 'jdoe@email.com', 'njdoedevlvr');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('This test evaluates the engineer github value from getGithub', () => {
    const engineer = new Engineer('Jane Doe', 777, 'jdoe@email.com', 'njdoedevlvr');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('This test evaluates the role of engineer from getRole', () => {
    const engineer = new Engineer('Jane Doe', 777, 'jdoe@email.com', 'njdoedevlvr');

    expect(engineer.getRole()).toEqual("Engineer");
});








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