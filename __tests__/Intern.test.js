const Intern = require('../lib/intern');


test('create an intern object', () => {
    const testObj =  new Intern();

    expect(typeof(testObj)).toBe('object')
})