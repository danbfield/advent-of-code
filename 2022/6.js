import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/6.txt')

const markers1 = []
const markers2 = []

const minimumSize1 = 4
const minimumSize2 = 14

for (const string of input) {
  const split = string.split('')
  let set = new Set()

  for (let i = 0; i < split.length; i++) {
    set = new Set()

    for (let j = 0; j < minimumSize1; j++) {
      set.add(split[i + j])
    }

    if (set.size === minimumSize1) {
      markers1.push(i + minimumSize1)
      break
    }
  }
}

for (const string of input) {
  let set = new Set()
  const split = string.split('')

  for (let i = 0; i < split.length; i++) {
    set = new Set()

    for (let j = 0; j < minimumSize2; j++) {
      set.add(split[i + j])
    }

    if (set.size === minimumSize2) {
      markers2.push(i + minimumSize2)
      break
    }
  }
}

export const d6p1 = markers1.reduce((partialSum, a) => partialSum + a, 0)
export const d6p2 = markers2.reduce((partialSum, a) => partialSum + a, 0)
