import { parseInputAsStrings, sum } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/7.txt')

const directory = {}
const paths = []

for (const command of input) {
  if (command.startsWith('$ cd ')) {
    const current = command.split('$ cd ')[1]
    command.includes('..') ? paths.pop() : paths.push(current)
  } else if (/^\d/.test(command)) {
    const temp = [...paths]

    while (temp.length) {
      const joinedPaths = temp.join('_')
      const fileSize = Number(command.split(' ')[0])

      directory[joinedPaths] = (directory[joinedPaths] || 0) + fileSize

      temp.pop()
    }
  }
}

const DISK_SPACE = 70000000
const REQUIRED_SPACE = 30000000

export const d7p1 = Object.values(directory)
  .filter((value) => value < 100000)
  .reduce(sum, 0)

export const d7p2 = Object.values(directory)
  .filter((value) => value >= REQUIRED_SPACE - (DISK_SPACE - directory['/']))
  .sort((a, b) => a - b)[0]
