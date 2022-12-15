import { parseInputAsStrings } from '../inputs/helper.js'

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

function getTreeScore(height, rowIndex, colIndex, rows, cols) {
  let top = 0
  let left = 0
  let right = 0
  let bottom = 0

  for (let i = rowIndex - 1; i > -1; --i) {
    ++top

    if (Number(rows[i][colIndex]) >= height) {
      break
    }
  }

  for (let i = colIndex - 1; i > -1; --i) {
    ++left

    if (Number(rows[rowIndex][i]) >= height) {
      break
    }
  }

  for (let i = colIndex + 1; i < cols.length; ++i) {
    ++right

    if (Number(rows[rowIndex][i]) >= height) {
      break
    }
  }

  for (let i = rowIndex + 1; i < rows.length; ++i) {
    ++bottom

    if (Number(rows[i][colIndex]) >= height) {
      break
    }
  }

  return top * left * right * bottom
}

const trees = []

// 30373
// 25512 etc.
input.forEach((row, rowIndex, rows) => {
  // 3, 0, 3, 7, 3
  // 2, 5, 5, 1, 2 etc.
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

    const tree = {
      height,
      visible: isEdge || up || below || left || right,
      count: 0,
    }

    if (!isEdge) {
      // calculate count;
      tree.count = getTreeScore(height, rowIndex, colIndex, rows, cols)
    }

    trees.push(tree)
  })
})

export const d8p1 = trees.filter((tree) => tree.visible).length
export const d8p2 = Math.max(...trees.map((tree) => tree.count))
