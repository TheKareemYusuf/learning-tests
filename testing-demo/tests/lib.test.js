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

describe('getCurrencies', () => { 
    it('should test array', () => {
        const result = lib.getCurrencies();

        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']))
    })
 })

describe('getProduct', () => {
    it('should return the product with the given id', () => { 
        const result = lib.getProduct(1);

        expect(result).toMatchObject({id: 1, price: 10})

        expect(result).toHaveProperty('id', 1)
     })
 })

 describe('registerUser', () => { 
    it('should throw error if username is falsy', () => { 
         const args = [null, undefined, '', 0, NaN, false ]
         args.forEach(a => {
            expect(() => {lib.registerUser(a)}).toThrow()
         })
     })

     it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser('mosh')
        expect(result).toMatchObject({username: 'mosh'})
        expect(result.id).toBeGreaterThan(0)
     })
  })