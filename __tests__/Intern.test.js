const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('abdi', 14, 'abdi@uofm.com', 'school' )

    expect(intern.school).toEqual(expect.any(String));

})


test('gets intern role', () => {
    const intern = new Intern('abdi', 14, 'abdi@uofm.com', 'school' )
    expect(intern.getRole()).toEqual('Intern');
})



test('gets intern school', () => {
    const intern = new Intern('abdi', 14, 'abdi@uofm.com', 'school' )
    expect(intern.getSchool()).toEqual(intern.school);
})