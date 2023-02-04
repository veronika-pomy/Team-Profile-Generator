const Intern = require('../lib/Intern');
const intern = new Intern('Calvin','55555','calvin@gmail.com','NYU');

test('Creates a new object with name, id, email, and school arguments', ( ) => {
    expect(intern.name).toBe('Calvin');
    expect(intern.id).toBe('55555');
    expect(intern.email).toBe('calvin@gmail.com');
    expect(intern.school).toBe('NYU');
});

test('getSchool method returns the passed schoole name argument', ( ) => {
    expect(intern.getSchool()).toBe('NYU');
});

test('getRole method override Employee method and returns "Intern"', ( ) => {
    expect(intern.getRole()).toBe('Intern');
});

