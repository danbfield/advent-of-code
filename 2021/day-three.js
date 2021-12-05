import { parseInputAsStrings } from './inputs/helper.js'

const input = parseInputAsStrings('2021/inputs/day-three.txt')

const numberOfCharacters = 12

const getMostCommonBitInPosition = (diagnostics, position) => {
  let bit0 = 0
  let bit1 = 0

  for (let i = 0; i < diagnostics.length; i++) {
    const character = diagnostics[i].charAt(position)
    if (character === '0') bit0++
    if (character === '1') bit1++
  }

  return bit0 > bit1 ? '0' : '1'
}

const getLeastCommonBitInPosition = (diagnostics, position) => {
  let bit0 = 0
  let bit1 = 0

  for (let i = 0; i < diagnostics.length; i++) {
    const character = diagnostics[i].charAt(position)
    if (character === '0') bit0++
    if (character === '1') bit1++
  }

  return bit0 < bit1 ? '0' : '1'
}

const getUnitRate = (diagnostics, range) => {
  let values = []

  for (let position = 0; position < numberOfCharacters; position++) {
    const value =
      range === 'max'
        ? getLeastCommonBitInPosition(diagnostics, position)
        : getMostCommonBitInPosition(diagnostics, position)

    values.push(value)
  }

  // Converts binary to decimal
  return parseInt(values.join(''), 2)
}

const gammaRate = getUnitRate(input, 'max')
const epsilonRate = getUnitRate(input, 'min')

const dayThreePartOne = gammaRate * epsilonRate
const dayThreePartTwo = '🚧 WIP 🚧'

export { dayThreePartOne, dayThreePartTwo }
