import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/4.txt')

const getAllNumbersBetween = (beginning, end) => {
  const numbers = []

  for (let i = beginning; i <= end; i++) {
    numbers.push(i)
  }

  return numbers
}

const getSections = (assignment) => {
  const [beginning, end] = assignment.split('-')

  return getAllNumbersBetween(parseInt(beginning), parseInt(end))
}

let count = 0

for (let i = 0; i < input.length; i++) {
  const [first, second] = input[i].split(',')

  const firstSection = getSections(first)
  const secondSection = getSections(second)

  console.log({ firstSection, secondSection })
}

console.log(count)

export const d4p1 = 'n/a'
export const d4p2 = 'n/a'
