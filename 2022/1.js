import {
  parseInputAsStrings,
  splitOnSeparator,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/1.txt')

const splitArray = deepConvertStringToInt(splitOnSeparator(input))

const totalPerElf = splitArray
  .map((value) => value.reduce((partialSum, a) => partialSum + a, 0))
  .sort((a, b) => b - a)

console.log(totalPerElf[0])

let total = 0
const array = []

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    total = total + parseInt(input[i])
  }

  // Splits between "elves" and handles
  // the last iteration
  if (input[i] === '' || i == input.length - 1) {
    array.push(total)
    total = 0
  }
}

const sorted = array.sort((a, b) => b - a)

const d1p1 = sorted[0]

const d1p2 = [sorted[0], sorted[1], sorted[2]].reduce(
  (partialSum, a) => partialSum + a,
  0
)

export { d1p1, d1p2 }
