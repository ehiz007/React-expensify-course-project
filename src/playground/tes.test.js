const game = (a,b) => a+b
const greeting = (name) => `Hello ${name}`

test('Should return a+b', () => {
    
    expect(game(1,5)).toBe(6)
    
})

test ( 'should return greeting', () => {
    let a = greeting('james black')
    expect(a).toBe('Hello james black')
})