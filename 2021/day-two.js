import { parseInputAsStrings } from './inputs/helper.js'

const input = parseInputAsStrings('2021/inputs/day-two.txt')

const FORWARD = 'forward'
const DOWN = 'down'
const UP = 'up'

const calculatePosition = () => {
  let horizontalPosition = 0
  let depth = 0

  for (let i = 0; i < input.length; i++) {
    let [direction, units] = input[i].split(' ')

    units = parseInt(units)

    if (direction === FORWARD) {
      horizontalPosition = horizontalPosition + units
    }

    if (direction === DOWN) {
      depth = depth + units
    }

    if (direction === UP) {
      depth = depth - units
    }
  }

  return horizontalPosition * depth
}

const dayTwoPartOne = calculatePosition()

export { dayTwoPartOne }
