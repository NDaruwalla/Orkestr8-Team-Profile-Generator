// Pull in the Manager class/constructor, create tests for Manager object, id, email, role
// Require Manager from Manager.js in lib folder

const Manager = require('../lib/Manager');

// Create the Manager object and use test data: Nic Darz for manager name, 123 for employee ID, and ndarz@email.com for test email and 333 for office number

test('This test creates the Manager object and evaluates manager office number', () => {
    const manager = new Manager('Nic Darz', 123, 'ndarz@email', 333);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('This test evaluates role of Manager from getRole', () => {
    const manager = new Manager('Nic Darz', 123, 'ndarz@email', 333);

    expect(manager.getRole()).toEqual("Manager");
});


