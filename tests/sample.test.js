describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

describe('Sample Test 2', () => {
    it('should test that false === false', () => {
        expect(false).toBe(false)
    })
})

describe('Sample Test 3', () => {
    it('should test that true !== false', () => {
        expect(true).not.toBe(false)
    })
})

describe('Sample Test 4', () => {
    it('should test that Vincent is not a Crab', () => {
        expect("Vincent").not.toBe("Crab")
    })
})