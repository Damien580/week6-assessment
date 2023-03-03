const {shuffleArray} = require('./utils')

console.log(shuffleArray)

describe('shuffleArray should return an array', () => {
    test('returns an array', () => {
        expect(Array.isArray(shuffleArray([1, 2, 3]))).toBe(true)
    })
})

describe('Test array order', () => {
    test('Arrays order shuffle', () => {
        expect(shuffleArray([1, 2, 3]).not.toEqual([1, 2, 3]))
    })
})