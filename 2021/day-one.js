import { parseInput } from './inputs/helper.js'

const input = parseInput('2021/inputs/day-one.txt')

const dayOnePartOne = () => {
  const INTERVAL = 1

  const instances = (input, interval) =>
    input.reduce((previousValue, currentValue, currentIndex) => {
      return currentValue < input[currentIndex + interval]
        ? previousValue + 1
        : previousValue
    }, 0)

  return instances(input, INTERVAL)
}

export { dayOnePartOne }
