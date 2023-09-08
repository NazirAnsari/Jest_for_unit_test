const { add } = require('../sum')

test('add two number', () => {
    expect(add(4, 6)).toBe(10)
})