const Manager = require('../lib/Manager');
const manager = new Manager('Bo','88888','bo@gmail.com','59');

test('Creates a new object with name, id, email, and office number values', ( ) => {
    expect(manager.name).toBe('Bo');
    expect(manager.id).toBe('88888');
    expect(manager.email).toBe('bo@gmail.com');
    expect(manager.office).toBe('59');
});

test('officeNumber method returns the passed office number argument', ( ) => {
    expect(manager.getOfficeNumber()).toBe('59');
});

test('getRole overrides Employee method returns "Manager"', ( ) => {
    expect(manager.getRole()).toBe('Manager');
});