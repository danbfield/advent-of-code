import { parseInputAsStrings } from './inputs/helper.js'

const input = parseInputAsStrings('2021/inputs/day-two.txt')

const calculatePosition = (commands, considerAim = false) => {
  const DIRECTIONS = {
    FORWARD: 'forward',
    DOWN: 'down',
    UP: 'up',
  }

  let aim = 0
  let depth = 0
  let position = 0

  for (let i = 0; i < commands.length; i++) {
    const [direction, value] = input[i].split(' ')
    const units = parseInt(value)

    switch (direction) {
      case DIRECTIONS.FORWARD:
        position = position + units
        depth = considerAim ? depth + units * aim : depth
        break
      case DIRECTIONS.DOWN:
        depth = considerAim ? depth : depth + units
        aim = considerAim ? (aim += units) : aim
        break
      case DIRECTIONS.UP:
        depth = considerAim ? depth : depth - units
        aim = considerAim ? (aim -= units) : aim
        break
    }
  }

  return position * depth
}

const dayTwoPartOne = calculatePosition(input)

const dayTwoPartTwo = calculatePosition(input, true)

export { dayTwoPartOne, dayTwoPartTwo }
