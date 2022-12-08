import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/7.txt')

// - / (dir)
//   - a (dir)
//     - e (dir)
//       - i (file, size=584)
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)

console.log(input)

for (let i = 0; i < input.length; i++) {
  console.log(command)

  const command = input[i].split(' ')
  const isNumber = new RegExp('^[0-9]+$')

  if (isNumber.test(command[0])) {
    console.log('file')
  }

  if (command[1].includes('cd')) {
    const dir = command[2]
    console.log('cd command')
  }
}
export const d7p1 = 0
export const d7p2 = 0
