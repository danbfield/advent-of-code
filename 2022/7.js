import { parseInputAsStrings } from '../inputs/helper.js'

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

console.log(directory)

export const d7p1 = 0
export const d7p2 = 0
