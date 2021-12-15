const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer('abdi', 14, 'abdi@uofm.com', 'githubuser' )

    expect(engineer.github).toEqual(expect.any(String));

})


test('gets engineer role', () => {
    const engineer = new Engineer('abdi', 14, 'abdi@uofm.com', 'githubuser' )
    expect(engineer.getRole()).toEqual('Engineer');
})



test('gets engineer githubuser', () => {
    const engineer = new Engineer('abdi', 14, 'abdi@uofm.com', 'githubuser' )
    expect(engineer.getGithub()).toEqual('githubuser');
})