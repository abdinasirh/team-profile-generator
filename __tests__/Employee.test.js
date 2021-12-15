const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('abdi', 14, 'abdi@uofm.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('abdi', 14, 'abdi@uofm.com')

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('abdi', 14, 'abdi@uofm.com')

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('abdi', 14, 'abdi@uofm.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
});
test('gets employee role', () => {
    const employee = new Employee('abdi', 14, 'abdi@uofm.com')

    expect(employee.getRole()).toEqual(expect.stringContaining ('Employee'));
});


