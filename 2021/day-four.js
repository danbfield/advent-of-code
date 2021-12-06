import { parseInputByCarriageReturn } from './inputs/helper.js'

const input = parseInputByCarriageReturn('2021/inputs/day-four.txt')

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
      currentBoard.push(formattedString.split(' '))
    }
  }

  return [arrayOfDrawnNumbers, boards]
}

const [numbers, boards] = formatInput(input)

const getWinningResult = (board, calledNumbers) => {
  const flatBoard = board.flat()
  const lastNumber = parseInt(calledNumbers[calledNumbers.length - 1])

  const excludedNumbers = flatBoard
    .filter((boardNumbers) => !calledNumbers.includes(boardNumbers))
    .map((item) => parseInt(item))

  const summedExcludedNumbers = excludedNumbers.reduce((a, b) => a + b, 0)

  return summedExcludedNumbers * lastNumber
}

const getWinningBoard = (numbers, board) => {
  for (let x = 0; x < board.length; x++) {
    // We need this to get the columns, not the rows due to how we've
    // built our data structure, because our bingo board grid is 5x5.
    const nums = [0, 1, 2, 3, 4]

    const rowsMatch = nums.every((num) => numbers.includes(board[x][num]))
    const colsMatch = nums.every((num) => numbers.includes(board[num][x]))

    if (rowsMatch || colsMatch) {
      return board
    }
  }
}

const playBingo = (bingoNumbers, bingoBoards) => {
  const numbers = []
  const winners = []

  let partAResult = 0
  let partBResult = 0

  for (let i = 0; i < bingoNumbers.length; i++) {
    numbers.push(bingoNumbers[i])

    for (let j = 0; j < bingoBoards.length; j++) {
      const board = bingoBoards[j]
      const winningBoard = getWinningBoard(numbers, board)

      if (winningBoard) {
        winners.push(winningBoard)

        // We only care about the first winner here
        if (winners.length === 1) {
          partAResult = getWinningResult(winners[0], numbers)
        }

        if (bingoBoards.length > 1) {
          // Remove the winning board from array of potential boards
          bingoBoards = bingoBoards.filter((board) => board !== winningBoard)
        } else {
          partBResult = getWinningResult(winners[winners.length - 1], numbers)
          return [partAResult, partBResult]
        }
      }
    }
  }
}

const dayFourPartOne = playBingo(numbers, boards)[0]

const dayFourPartTwo = playBingo(numbers, boards)[1]

export { dayFourPartOne, dayFourPartTwo }
