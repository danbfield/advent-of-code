import { parseInputAsStrings } from './inputs/helper.js'

const input = parseInputAsStrings('2021/inputs/day-two.txt')

const FORWARD = 'forward'
const DOWN = 'down'
const UP = 'up'

const calculatePositionPartOne = () => {
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

const calculatePositionPartTwo = () => {
  let horizontalPosition = 0
  let currentAim = 0
  let depth = 0

  for (let i = 0; i < input.length; i++) {
    let [direction, units] = input[i].split(' ')

    units = parseInt(units)

    if (direction === FORWARD) {
      horizontalPosition = horizontalPosition + units
      depth = depth + units * currentAim
    }

    if (direction === DOWN) {
      currentAim = currentAim + units
    }

    if (direction === UP) {
      currentAim = currentAim - units
    }
  }

  return horizontalPosition * depth
}

const calculatePosition = (commands) => {
  let depth = 0
  let position = 0

  for (let i = 0; i < commands.length; i++) {
    const [direction, value] = input[i].split(' ')
    const units = parseInt(value)

    switch (direction) {
      case FORWARD:
        position = position + units
        break
      case DOWN:
        depth = depth + units
        break
      case UP:
        depth = depth - units
        break
    }
  }

  return position * depth
}

const dayTwoPartOne = calculatePositionPartOne()
const dayTwoPartTwo = calculatePositionPartTwo()

console.log(calculatePosition(input))

export { dayTwoPartOne, dayTwoPartTwo }
