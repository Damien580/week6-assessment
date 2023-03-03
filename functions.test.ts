const {shuffleArray} = require('./utils')

console.log(shuffleArray)

describe('shuffleArray should return an array', () => {
    test('returns an array', () => {
        expect(shuffleArray().isArray).toBeTruthy()
    })
})

describe('shuffleArray should return array of same length each time', () => {
    test('Arrays of equal length', () => {
        expect(shuffleArray().toEqual(shuffleArray().length))
    })
})