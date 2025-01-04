import { simpleReadAsString, sum } from '../inputs/helper.js'

const input = simpleReadAsString('inputs/2024/3.txt')

const regexp = /mul\(\d+,\d+\)|don't\(\)|do\(\)/g
const array = [...input.matchAll(regexp)]

const matchingNumbersPartOne = []
const matchingNumbersPartTwo = []
let mostRecentInstruction = 'initial'

array.forEach((match) => {
  // Get the matching string...
  const matchingItem = match[0]

  // Remove the stuff we don't care about and split the string
  // from mul(420,69) -> [ 420, 69 ]
  if (matchingItem.startsWith('m')) {
    matchingNumbersPartOne.push(
      matchingItem.replace('mul(', '').replace(')', '').split(',')
    )
  }
})

for (let i = 0; i < array.length; i++) {
  const matchingItem = array[i][0]

  if (matchingItem === "don't()") {
    mostRecentInstruction = matchingItem
    i++
    continue
  }

  if (matchingItem === 'do()') {
    mostRecentInstruction = matchingItem
  }

  if (
    (mostRecentInstruction === 'do()' || mostRecentInstruction === 'initial') &&
    matchingItem.startsWith('m')
  ) {
    matchingNumbersPartTwo.push(
      matchingItem.replace('mul(', '').replace(')', '').split(',')
    )
  }
}

// Multiplies each of the matching sets together, and sums the total.
const d3p1 = matchingNumbersPartOne.map(([a, b]) => a * b).reduce(sum)
const d3p2 = matchingNumbersPartTwo.map(([a, b]) => a * b).reduce(sum)

export { d3p1, d3p2 }
