const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Pete','99999','pete@gmail.com','pete-git');

test('Creates a new object with name, id, email, and github user name arguments', ( ) => {
    expect(engineer.name).toBe('Pete');
    expect(engineer.id).toBe('99999');
    expect(engineer.email).toBe('pete@gmail.com');
    expect(engineer.github).toBe('pete-git');
});

test('gitHub method returns the passed github user name argument', ( ) => {
    expect(engineer.getGithub()).toBe('pete-git');
});

test('getRole method overrides Employee method returns "Engineer"', ( ) => {
    expect(engineer.getRole()).toBe('Engineer');
});