const functions = require('./functions');

// check if right value
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

// check false value
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// check to be null 
test('Should return null', () => {
    expect(functions.isNull()).toBeNull()
})

// check if undefined
test('Should be undefined', () => {
    expect(functions.isUndefined()).toBeUndefined()
})

// should false 
test('User should be John Doe Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'John',
        lastName: 'Doe'
    })
})

// < or > 
test('Should be < 1600', () => {
    const load1 = 800;
    const load2 = 900;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// regex 
test('There is no I in Team', () => {
    expect('teami').not.toMatch(/I/);
})

// Arrays 
test('Admin should be in usernames', () => {
    usernames = [
        'john',
        'michael',
    ];
    expect(usernames).toContain("Admin");
})