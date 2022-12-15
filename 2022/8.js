import {
  parseInputAsStrings,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/8.txt')

console.log(input)

const isVisibleUp = (
  currentHeight,
  currentLineIndex,
  currentColumnIndex,
  lines
) => {
  for (let i = 0; i < currentLineIndex; ++i) {
    if (parseInt(lines[i][currentColumnIndex]) >= currentHeight) {
      return true
    }
  }
}

const isVisibleBelow = (
  currentHeight,
  currentLineIndex,
  currentColumnIndex,
  lines
) => {
  for (let i = lines.length - 1; i > currentLineIndex; --i) {
    if (parseInt(lines[i][currentColumnIndex]) >= currentHeight) {
      return true
    }
  }
}

// 30373
// 25512 etc.
input.forEach((row, rowIndex, rows) => {
  // 3, 0, 3, 7, 3
  // 2, 5, 5, 1, 2 etc.
  console.log({ row })
  row.split('').forEach((col, colIndex, cols) => {
    const isEdge =
      !rowIndex ||
      rowIndex === rows.length - 1 ||
      !colIndex ||
      colIndex === cols.length - 1

    const height = Number(col)

    const up = isVisibleUp(height, rowIndex, colIndex, rows)
    const below = isVisibleBelow(height, rowIndex, colIndex, rows)
  })
})

export const d8p1 = 0
export const d8p2 = 0
