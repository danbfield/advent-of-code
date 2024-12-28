import { parseInputAsStrings, sum } from '../inputs/helper.js'

const leftList = []
const rightList = []
const differenceList = []
const similarityList = []

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
  similarityList.push(
    leftList[i] * rightList.filter((item) => item === leftList[i]).length
  )
}

// Sum the differences: https://adventofcode.com/2024/day/1
const d1p1 = differenceList.reduce(sum, 0)

// Sum the instances: https://adventofcode.com/2024/day/1#part2
const d1p2 = similarityList.reduce(sum, 0)

export { d1p1, d1p2 }
