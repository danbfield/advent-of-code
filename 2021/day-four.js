import { parseInputByCarriageReturn } from './inputs/helper.js'

const input = parseInputByCarriageReturn('2021/inputs/test.txt')

/**
 * Formats the input of parseInputByCarriageReturn which does two things.
 * Firstly, it takes the first line, and splits it by "," which creates
 * our bingo drawn numbers array. Then, it loops over the remaining lines
 * and creates the bingo boards. I did cheat a bit, on the final line
 * of the text file... just add a carriage return. Otherwise the final
 * board won't be added to the array. I couldn't be bothered adding a few
 * extra lines of code when I could just add a return.
 *
 * The function returns an object which includes the drawn numbers, and
 * an array of boards. Each line of a board is a string, however it could
 * be split into it's own array using split(' ').
 *
 * { drawnNumbers:
 *    [ '7',  '4',  '9',  '5',  '11', ],
 *    boards: [
 *      [
 *        '22 13 17 11 0',
 *        '8 2 23 4 24',
 *        '21 9 14 16 7',
 *        '6 10 3 18 5',
 *        '1 12 20 15 19'
 *      ]
 *   ]
 * }
 *
 * @param string[] input
 * @returns object
 */
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
