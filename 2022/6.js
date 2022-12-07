import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/6.txt')

const markers1 = []
const markers2 = []

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
      markers1.push(i + 4)
      break
    }
  }
}

for (const string of input) {
  let set = new Set()
  const split = string.split('')

  for (let i = 0; i < split.length; i++) {
    set = new Set()

    set.add(split[i])
    set.add(split[i + 1])
    set.add(split[i + 2])
    set.add(split[i + 3])
    set.add(split[i + 4])
    set.add(split[i + 5])
    set.add(split[i + 6])
    set.add(split[i + 7])
    set.add(split[i + 8])
    set.add(split[i + 9])
    set.add(split[i + 10])
    set.add(split[i + 11])
    set.add(split[i + 12])
    set.add(split[i + 13])

    if (set.size === 14) {
      markers2.push(i + 14)
      break
    }
  }
}

export const d6p1 = markers1.reduce((partialSum, a) => partialSum + a, 0)
export const d6p2 = markers2.reduce((partialSum, a) => partialSum + a, 0)
