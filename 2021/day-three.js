import { parseInputAsStrings } from './inputs/helper.js'

const input = parseInputAsStrings('2021/inputs/day-three.txt')

const NUMBER_OF_CHARACTERS = 12

const MAX_RANGE = 'max'
const MIN_RANGE = 'min'

const AS_DECIMAL = 2

const getBitInPosition = (array, position, range) => {
  let bit0 = 0
  let bit1 = 0

  for (let i = 0; i < array.length; i++) {
    const character = array[i].charAt(position)
    if (character === '0') bit0++
    if (character === '1') bit1++
  }

  // Conditions needed to determine which value is returned;
  // min and max are used to determine which are the least
  // and most common bit values, in the case in which these
  // values are even, we should return the favoured value.
  if (range === MAX_RANGE && bit0 === bit1) return '1'
  if (range === MIN_RANGE && bit0 === bit1) return '0'
  if (range === MAX_RANGE) return bit0 > bit1 ? '0' : '1'
  if (range === MIN_RANGE) return bit0 < bit1 ? '0' : '1'
}

const getUnitRate = (array, range) => {
  let values = []

  // Loops over each position, and gets the most/least common bit
  // and adds it to an array of values
  for (let position = 0; position < NUMBER_OF_CHARACTERS; position++) {
    const value = getBitInPosition(array, position, range)

    values.push(value)
  }

  // Convert ["0", "0", "1", "1", "1"] into a string and parseInt;
  // changing it into a decimal number
  return parseInt(values.join(''), AS_DECIMAL)
}

const recursiveFilter = (array, range, position = 0) => {
  if (array.length === 1) return parseInt(array.join(''), AS_DECIMAL)

  const filtered = array.filter((element) =>
    element
      .charAt(position)
      .startsWith(getBitInPosition(array, position, range))
  )

  return recursiveFilter(filtered, range, position + 1)
}

const gammaRate = getUnitRate(input, MAX_RANGE)
const epsilonRate = getUnitRate(input, MIN_RANGE)

const oxygenRating = recursiveFilter(input, MAX_RANGE)
const scrubberRating = recursiveFilter(input, MIN_RANGE)

const dayThreePartOne = gammaRate * epsilonRate

const dayThreePartTwo = oxygenRating * scrubberRating

export { dayThreePartOne, dayThreePartTwo }
