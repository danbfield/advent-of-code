import {
  parseInputAsStrings,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/4.txt')

export let d4p1 = 0
export let d4p2 = 0

for (let i = 0; i < input.length; i++) {
  const [min1, max1, min2, max2] = deepConvertStringToInt(
    input[i].split(',').map((value) => value.split('-'))
  ).flat()

  if ((min1 >= min2 && max1 <= max2) || (min1 <= min2 && max1 >= max2)) {
    d4p1++
  }

  if ((min1 <= min2 && max1 >= min2) || (min2 <= min1 && max2 >= min1)) {
    d4p2++
  }
}
