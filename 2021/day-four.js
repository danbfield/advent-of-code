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
 *        [22, 13, 17, 11, 0],
 *        [8, 2, 23, 4, 24],
 *        [21, 9, 14, 16, 7],
 *        [6, 10, 3, 18, 5],
 *        [1, 12, 20, 15, 19]
 *      ]
 *   ]
 * }
 *
 * @param string[] input
 * @returns array
 */
const formatInput = (input) => {
  const arrayOfDrawnNumbers = input[0]
    .split([','])
    .map((item) => parseInt(item))

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
      currentBoard.push(
        currentLine
          .replace(/ +/g, ' ')
          .split(' ')
          .map((item) => parseInt(item))
      )
    }
  }

  return [arrayOfDrawnNumbers, boards]
}

const [numbers, boards] = formatInput(input)

/**
 * This function calculates the result of the winning board. Start
 * by finding the sum of all unmarked numbers on that board; in this
 * case, the sum is 188. Then, multiply that sum by the number that
 * was just called when the board won, 24, to get the final score,
 * 188 * 24 = 4512.
 *
 * @param array[int] numbers
 * @param array[array[int]] board
 * @returns int
 */
const getWinningResult = (numbers, board) => {
  const excludedNumbers = board
    .flat()
    .filter((boardNumbers) => !numbers.includes(boardNumbers))

  const summedExcludedNumbers = excludedNumbers.reduce((a, b) => a + b, 0)

  return summedExcludedNumbers * numbers[numbers.length - 1]
}

/**
 * This function checks if this board was in fact a winning board,
 * based on the current numbers drawn in the game of bingo. The
 * board itself is a 5x5 grid of numbers, and we cross check this,
 * horizontally and vertically to see if each called bingo number
 * is included within that row or column. Assuming either of the
 * row or column wins bingo, return the board back.
 *
 * @param array[int] numbers
 * @param array[array[int]] board
 * @returns array[array[int]] board
 */
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

/**
 * This function loops over each number (replicating as it's drawn)
 * and checks against each board to see if the board meets the win
 * condition of getting 5 marked numbers in a row, either vertically
 * or horizontally. Every time we get a winning board, we add that
 * board to an array of winners, and keep going until we get the
 * last winner. Every time we get a winner, we also remove that board
 * from the potential boards, slowly but surely getting less and less
 * boards to play with.
 *
 * Eventually, there will be 1 board left (which solves part B).
 *
 * @param array[int] bingoNumbers
 * @param array[array[int]] bingoBoards
 * @returns
 */
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

        // We only care about the first winner here, and we need to calculate
        // the winning result immediately otherwise the array of drawn numbers
        // would be different than when it won.
        if (winners.length === 1) {
          partAResult = getWinningResult(numbers, winners[0])
        }

        if (bingoBoards.length > 1) {
          // Remove the winning board from array of potential boards
          bingoBoards = bingoBoards.filter((board) => board !== winningBoard)
        } else {
          partBResult = getWinningResult(numbers, winners[winners.length - 1])
          return [partAResult, partBResult]
        }
      }
    }
  }
}

const [dayFourPartOne, dayFourPartTwo] = playBingo(numbers, boards)

export { dayFourPartOne, dayFourPartTwo }
