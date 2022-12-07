import {
  parseInputAsStrings,
  splitOnSeparator,
  deepConvertStringToInt,
  sum,
} from '../inputs/helper.js'

const input = deepConvertStringToInt(
  splitOnSeparator(parseInputAsStrings('inputs/2022/1.txt'))
)

const output = input.map((value) => value.reduce(sum, 0)).sort((a, b) => b - a)

export const d1p1 = output[0]
export const d1p2 = output.slice(0, 3).reduce(sum, 0)
