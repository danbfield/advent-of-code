import { parseInputAsNumbers } from './inputs/helper.js'

const input = parseInputAsNumbers('2021/inputs/day-one.txt')

const instances = (input, interval) =>
  input.reduce((previousValue, currentValue, currentIndex) => {
    return currentValue < input[currentIndex + interval]
      ? previousValue + 1
      : previousValue
  }, 0)

const dayOnePartOne = instances(input, 1)

const dayOnePartTwo = instances(input, 3)

export { dayOnePartOne, dayOnePartTwo }
