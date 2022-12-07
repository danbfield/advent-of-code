import { parseInputAsStrings, sum } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/6.txt')

const subroutine = {
  1: { markers: [], size: 4 },
  2: { markers: [], size: 14 },
}

for (const string of input) {
  const { size, markers } = subroutine[1]

  for (let i = 0; i < string.length; i++) {
    const set = new Set()

    for (let j = 0; j < size; j++) {
      set.add(string[i + j])
    }

    if (set.size === size) {
      markers.push(i + size)
      break
    }
  }
}

for (const string of input) {
  const { size, markers } = subroutine[2]

  for (let i = 0; i < string.length; i++) {
    const set = new Set()

    for (let j = 0; j < size; j++) {
      set.add(string[i + j])
    }

    if (set.size === size) {
      markers.push(i + size)
      break
    }
  }
}

export const d6p1 = subroutine[1].markers.reduce(sum, 0)

export const d6p2 = subroutine[2].markers.reduce(sum, 0)
