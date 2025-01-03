import { simpleReadAsString, sum } from '../inputs/helper.js'

const input = simpleReadAsString('inputs/2024/3.txt')

const regexp = /mul\(\d+,\d+\)/g
const array = [...input.matchAll(regexp)]

const matchingNumbers = []

array.forEach((match) => {
  // Get the matching string...
  const matchingItem = match[0]

  // Remove the stuff we don't care about and split the string
  // from mul(420,69) -> [ 420, 69 ]
  matchingNumbers.push(
    matchingItem.replace('mul(', '').replace(')', '').split(',')
  )
})

// Multiplies each of the matching sets together, and sums the total.
const d3p1 = matchingNumbers.map(([a, b]) => a * b).reduce(sum)

const d3p2 = 0

export { d3p1, d3p2 }
