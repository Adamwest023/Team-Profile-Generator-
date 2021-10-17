const Manager = require('../lib/Manager');


test('create an Manager object', () => {
    const testObj =  new Manager();

    expect(typeof(testObj)).toBe('object')
})