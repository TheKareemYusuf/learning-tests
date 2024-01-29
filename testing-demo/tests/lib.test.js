const lib = require('../lib');

describe('absolute', () => {
    it('Should return a positive number if input is positive', () => { 
        const result = lib.absolute(1)
        expect(result).toBe(1)
    })
    
    it('Should return a positive number if input is negative', () => { 
        const result = lib.absolute(-1)
        expect(result).toBe(1)
    })
    
    it('Should return 0 if input is 0', () => { 
        const result = lib.absolute(0)
        expect(result).toBe(0)
    })
})

describe('Greet', () => { 
    it('should return the greeting', () => {
        const result = lib.greet('Mosh')
        expect(result).toMatch(/Mosh/);
        expect(result).toContain('Mosh')
     })
})

describe('Array', () => { 
    test('should test array', () => {
        const result = lib.getCurrencies();

        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']))
    })
 })