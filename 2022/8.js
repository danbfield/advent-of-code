import {
  parseInputAsStrings,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/8.txt')

console.log(input)

const isVisibleFromAbove = (height, rowIndex, colIndex, cols) => {
  for (let i = 0; i < rowIndex; ++i) {
    if (parseInt(cols[i][colIndex]) >= height) {
      return true
    }
  }

  return false
}

const isVisibleFromBelow = (height, rowIndex, colIndex, cols) => {
  for (let i = cols.length - 1; i > rowIndex; --i) {
    if (parseInt(cols[i][colIndex]) >= height) {
      return true
    }
  }

  return false
}

const isVisibleFromTheLeft = (height, rowIndex, colIndex, rows) => {
  for (let i = 0; i < colIndex; ++i) {
    if (parseInt(rows[rowIndex][i]) >= height) {
      return true
    }
  }

  return false
}

const isVisibleFromTheRight = (height, rowIndex, colIndex, rows, cols) => {
  for (let i = cols.length - 1; i > colIndex; --i) {
    if (parseInt(rows[rowIndex][i]) >= height) {
      return true
    }
  }

  return false
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

    const up = isVisibleFromAbove(height, rowIndex, colIndex, cols)
    const below = isVisibleFromBelow(height, rowIndex, colIndex, cols)
    const left = isVisibleFromTheLeft(height, rowIndex, colIndex, rows)
    const right = isVisibleFromTheRight(height, rowIndex, colIndex, rows, cols)

    if (!isEdge) {
      console.log({ up, below, left, right })
    }
  })
})

export const d8p1 = 0
export const d8p2 = 0
