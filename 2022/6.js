import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/6.txt')

const markers = []

for (const string of input) {
  const split = string.split('')
  let set = new Set()

  for (let i = 0; i < split.length; i++) {
    set = new Set()

    set.add(split[i])
    set.add(split[i + 1])
    set.add(split[i + 2])
    set.add(split[i + 3])

    if (set.size === 4) {
      markers.push(i + 4)
      break
    }
  }
}

export const d6p1 = markers.reduce((partialSum, a) => partialSum + a, 0)
export const d6p2 = 0
