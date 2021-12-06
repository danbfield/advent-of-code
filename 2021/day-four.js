import { parseInputByCarriageReturn } from './inputs/helper.js'

const input = parseInputByCarriageReturn('2021/inputs/test.txt')

const formatInput = (input) => {
  const arrayOfDrawnNumbers = input[0].split([','])

  let currentBoard = []
  let boards = []

  // Ignore the first line, which is our drawn numbers
  for (let i = 1; i < input.length; i++) {
    const currentLine = input[i].trim()

    if (currentLine === '' && currentBoard.length) {
      boards.push(currentBoard)
      currentBoard = []
    }

    if (currentLine !== '') {
      const formattedString = currentLine.replace(/ +/g, ' ')
      // currentBoard.push(formattedString.split(' '))
      // Should I split the string into an array of 5 values? Hmm...
      currentBoard.push(formattedString)
    }
  }

  return [arrayOfDrawnNumbers, boards]
}

const [drawnNumbers, boards] = formatInput(input)

console.log({ drawnNumbers, boards })
const solve = () => {
  // ...
  return 'something'
}

// The score of the winning board can now be calculated. Start by finding the sum
// of all unmarked numbers on that board; in this case, the sum is 188. Then, multiply
// that sum by the number that was just called when the board won, 24, to get the
// final score, 188 * 24 = 4512.
const calcuteFinalScore = () => {
  return 'something'
}

const dayFourPartOne = solve()

const dayFourPartTwo = solve()

export { dayFourPartOne, dayFourPartTwo }
