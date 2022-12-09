import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/8.txt')

console.log(input)

for (let i = 1; i < input.length - 1; i++) {
  for (let j = 1; j < input[i].length - 1; j++) {
    const horizontal = Number(input[i].substring(1, input[i].length - 1))
    const vertical = Number(input[j].substring(1, input[j].length - 1))

    console.log({ horizontal, vertical })
  }
}

export const d8p1 = 0
export const d8p2 = 0
