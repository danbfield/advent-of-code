import {
  parseInputAsStrings,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/4.txt')

let count = 0

for (let i = 0; i < input.length; i++) {
  const [first, second] = input[i].split(',')
  const [a, b] = first.split('-')
  const [c, d] = second.split('-')

  const [A, B, C, D] = deepConvertStringToInt([a, b, c, d])

  if ((A >= C && B <= D) || (A <= C && B >= D)) {
    count++
  }
}

export const d4p1 = count
export const d4p2 = 'n/a'
