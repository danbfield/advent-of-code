import { parseInputAsStrings } from '../inputs/helper.js'

const word = 'XMAS'.split('')
const input = parseInputAsStrings('inputs/2024/4.txt')

let count = 0

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    word.every((char, idx) => char === input?.[i - idx]?.[j]) && count++ // north
    word.every((char, idx) => char === input?.[i]?.[j + idx]) && count++ // east
    word.every((char, idx) => char === input?.[i + idx]?.[j]) && count++ // south
    word.every((char, idx) => char === input?.[i]?.[j - idx]) && count++ // west
    word.every((char, idx) => char === input?.[i - idx]?.[j + idx]) && count++ // north east
    word.every((char, idx) => char === input?.[i - idx]?.[j - idx]) && count++ // north west
    word.every((char, idx) => char === input?.[i + idx]?.[j + idx]) && count++ // south east
    word.every((char, idx) => char === input?.[i + idx]?.[j - idx]) && count++ // south west
  }
}

const d4p1 = count
const d4p2 = 0

export { d4p1, d4p2 }
