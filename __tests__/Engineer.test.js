const Engineer = require('../lib/engineer');


test('create an engineer object', () => {
    const testObj =  new Engineer();

    expect(typeof(testObj)).toBe('object')
})
