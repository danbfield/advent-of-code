import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/1.txt')

const dayOne = ''

let total = 0

const array = []

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    total = total + parseInt(input[i])
  } else {
    array.push(total)
    total = 0
  }
}

const sorted = array.sort((a, b) => b - a)

console.log(sorted[0])

export { dayOne }
