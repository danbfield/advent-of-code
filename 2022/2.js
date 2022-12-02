import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/2.txt')

const score = {
  'A X': [3 + 1, 0 + 3],
  'A Y': [6 + 2, 3 + 1],
  'A Z': [0 + 3, 6 + 2],
  'B X': [0 + 1, 0 + 1],
  'B Y': [3 + 2, 3 + 2],
  'B Z': [6 + 3, 6 + 3],
  'C X': [6 + 1, 0 + 2],
  'C Y': [0 + 2, 3 + 3],
  'C Z': [3 + 3, 6 + 1],
}

let p1 = 0
let p2 = 0

input.forEach((element) => {
  p1 += score[element][0]
  p2 += score[element][1]
})

export const d2p1 = p1
export const d2p2 = p2
