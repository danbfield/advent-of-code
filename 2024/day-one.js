import { parseInputAsStrings, sum } from '../inputs/helper.js'

const leftList = []
const rightList = []
const differenceList = []

const input = parseInputAsStrings('inputs/2024/1.txt')

// Create the seperated lists
for (let i = 0; i < input.length; i++) {
  const [a, _, b] = input[i].split(/(\s+)/)
  leftList.push(parseInt(a))
  rightList.push(parseInt(b))
}

// Sort into order from smallest to largest
leftList.sort()
rightList.sort()

// Figure out the difference between left and right lists
for (let i = 0; i < leftList.length; i++) {
  differenceList.push(Math.abs(leftList[i] - rightList[i]))
}

// Sum the differences
const answer1 = differenceList.reduce(sum, 0)

export { answer1 }
