import { parseInputAsStrings } from '../inputs/helper.js'

const word = 'XMAS'.split('')
const input = parseInputAsStrings('inputs/2024/4.txt')

let count = 0
let countB = 0

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    word.every((char, idx) => char === input[i - idx]?.[j]) && count++ // N
    word.every((char, idx) => char === input[i]?.[j + idx]) && count++ // E
    word.every((char, idx) => char === input[i + idx]?.[j]) && count++ // S
    word.every((char, idx) => char === input[i]?.[j - idx]) && count++ // W
    word.every((char, idx) => char === input[i - idx]?.[j + idx]) && count++ // NE
    word.every((char, idx) => char === input[i - idx]?.[j - idx]) && count++ // NW
    word.every((char, idx) => char === input[i + idx]?.[j + idx]) && count++ // SE
    word.every((char, idx) => char === input[i + idx]?.[j - idx]) && count++ // SW
  }
}

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'A') {
      // M   M
      //   A
      // S   S
      if (
        input[i - 1]?.[j + 1] === 'M' && // NE
        input[i - 1]?.[j - 1] === 'M' && // NW
        input[i + 1]?.[j + 1] === 'S' && // SE
        input[i + 1]?.[j - 1] === 'S' // SW
      ) {
        countB++
      }

      // M   S
      //   A
      // M   S
      if (
        input[i - 1]?.[j + 1] === 'S' && // NE
        input[i - 1]?.[j - 1] === 'M' && // NW
        input[i + 1]?.[j + 1] === 'S' && // SE
        input[i + 1]?.[j - 1] === 'M' // SW
      ) {
        countB++
      }

      // S   S
      //   A
      // M   M
      if (
        input[i - 1]?.[j + 1] === 'S' && // NE
        input[i - 1]?.[j - 1] === 'S' && // NW
        input[i + 1]?.[j + 1] === 'M' && // SE
        input[i + 1]?.[j - 1] === 'M' // SW
      ) {
        countB++
      }

      // S   M
      //   A
      // S   M
      if (
        input[i - 1]?.[j + 1] === 'M' && // NE
        input[i - 1]?.[j - 1] === 'S' && // NW
        input[i + 1]?.[j + 1] === 'M' && // SE
        input[i + 1]?.[j - 1] === 'S' // SW
      ) {
        countB++
      }
    }
  }
}

const d4p1 = count
const d4p2 = countB

export { d4p1, d4p2 }
