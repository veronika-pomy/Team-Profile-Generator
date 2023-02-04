const Employee = require('../lib/Employee');
const employee = new Employee('Veronika','77777','veronika@gmail.com');

test('Creates a new object with name, id and email values', ( ) => {
    expect(employee.name).toBe('Veronika');
    expect(employee.id).toBe('77777');
    expect(employee.email).toBe('veronika@gmail.com');
});

test('getName method returns the passed name argument', ( ) => {
    expect(employee.getName()).toBe('Veronika');
});

test('getId method returns the passed id argument', ( ) => {
    expect(employee.getId()).toBe('77777');
});

test('getEmail method returns the passed email argument', ( ) => {
    expect(employee.getEmail()).toBe('veronika@gmail.com');
});

test('getRole method returns "Employee"', ( ) => {
    expect(employee.getRole()).toBe('Employee');
});