import {
  parseInputAsStrings,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/4.txt')

let count = 0

for (let i = 0; i < input.length; i++) {
  const [elfOneZoneOne, elfOneZoneTwo, elfTwoZoneOne, elfTwoZoneTwo] =
    deepConvertStringToInt(
      input[i].split(',').map((value) => value.split('-'))
    ).flat()

  if (
    (elfOneZoneOne >= elfTwoZoneOne && elfOneZoneTwo <= elfTwoZoneTwo) ||
    (elfOneZoneOne <= elfTwoZoneOne && elfOneZoneTwo >= elfTwoZoneTwo)
  ) {
    count++
  }
}

export const d4p1 = count
export const d4p2 = 'n/a'
