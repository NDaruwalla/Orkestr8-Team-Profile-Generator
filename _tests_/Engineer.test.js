// Pull in the Engineer class/constructor, create tests for engineer object, github, role

// Require Engineer from Engineer.js in lib folder 
const Engineer = require('../lib/Engineer');

// Create the engineer object and use test data: Ina Ann Martin for employee name, 555 for employee ID, and amartin@email.com, and for test email, and iamdevlvr for github username.

test('This test creates the Engineer object', () => {
    const engineer = new Engineer('Ina Ann Martin', 555, 'amartin@email.com', 'iamdevlvr');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('This test evaluates the engineer github value from getGithub', () => {
    const engineer = new Engineer('Ina Ann Martin', 555, 'amartin@email.com', 'iamdevlvr');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('This test evaluates the role of engineer from getRole', () => {
    const engineer = new Engineer('Ina Ann Martin', 555, 'amartin@email.com', 'iamdevlvr');

    expect(engineer.getRole()).toEqual("Engineer");
});








