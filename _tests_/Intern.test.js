// Pull in the Intern class/constructor, create tests for intern object, role, school.

// Require Intern from Intern.js in lib folder

const Intern = require('../lib/Intern');

// Create the Intern object and use test data: John Smith for employee name, 222 for employee ID, and jsmith@email.com, and for test email, and Prestigious School for school.

test('This test creates the Intern object', () => {
    const intern = new Intern('John Smith', 222, 'jsmith@email.com', 'Prestigious School');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('This test evaluates Intern school from getSchool', () => {
    const intern = new Intern('John Smith', 222, 'jsmith@email.com', 'Prestigious School');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('This test evaluates the role of Intern from getRole', () => {
    const intern = new Intern('John Smith', 222, 'jsmith@email.com', 'Prestigious School');

    expect(intern.getRole()).toEqual("Intern");
}); 





