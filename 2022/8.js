import {
  parseInputAsStrings,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/8.txt')

const isVisibleFromAbove = (height, rowIndex, colIndex, rows) => {
  for (let i = 0; i < rowIndex; ++i) {
    if (Number(rows[i][colIndex]) >= height) {
      return false
    }
  }

  return true
}

const isVisibleFromBelow = (height, rowIndex, colIndex, rows, cols) => {
  for (let i = cols.length - 1; i > rowIndex; --i) {
    if (Number(rows[i][colIndex]) >= height) {
      return false
    }
  }

  return true
}

const isVisibleFromTheLeft = (height, rowIndex, colIndex, rows) => {
  for (let i = 0; i < colIndex; ++i) {
    if (Number(rows[rowIndex][i]) >= height) {
      return false
    }
  }

  return true
}

const isVisibleFromTheRight = (height, rowIndex, colIndex, rows, cols) => {
  for (let i = cols.length - 1; i > colIndex; --i) {
    if (Number(rows[rowIndex][i]) >= height) {
      return false
    }
  }

  return true
}

let visible = 0

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

    const up = isVisibleFromAbove(height, rowIndex, colIndex, rows)
    const below = isVisibleFromBelow(height, rowIndex, colIndex, rows, cols)
    const left = isVisibleFromTheLeft(height, rowIndex, colIndex, rows)
    const right = isVisibleFromTheRight(height, rowIndex, colIndex, rows, cols)

    if (isEdge || up || below || left || right) {
      visible++
    }
  })
})

export const d8p1 = visible
export const d8p2 = 0
