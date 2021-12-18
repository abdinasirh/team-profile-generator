const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('abdi', 14, 'abdi@uofm.com', 'officenumber' )

    expect(manager.officeNumber).toEqual(expect.any(String));

})


test('gets Manager role', () => {
    const manager = new Manager('abdi', 14, 'abdi@uofm.com', 'officenumber' )
    expect(manager.getRole()).toEqual('Manager');
})



test('gets manager officenumber', () => {
    const manager = new Manager('abdi', 14, 'abdi@uofm.com', 'officenumber' )
    expect(manager.officeNumber).toEqual(manager.officeNumber);
})