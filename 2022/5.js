import { simpleReadAsString } from '../inputs/helper.js'

const input = simpleReadAsString('inputs/2022/5.txt')

const [cratesStr, instructionsStr] = input.split('\n\n')

const flipRowToStack = (arr) =>
  arr[0]
    .map((_, i) => arr.map((row) => row[i]).reverse())
    .map((e) => e.filter((e) => e !== '    '))

const rowsStr = cratesStr.split('\n').slice(0, -1)
const rowsArr = rowsStr.map((row) =>
  [...row.matchAll(/[A-Z]|    ?/g)].map((match) => match[0])
)

export let d5p1 = flipRowToStack(rowsArr)
export let d5p2 = flipRowToStack(rowsArr)

const steps = instructionsStr
  .split('\n')
  .map((e) => e.match(/move (\d+) from (\d+) to (\d+)/).splice(1, 4))
  .map((e) => e.map(Number))

for (const step of steps) {
  const [number, from, to] = step
  const crates = d5p1[from - 1].splice(-number).reverse()
  d5p1[to - 1].push(...crates)
}

for (const step of steps) {
  const [number, from, to] = step
  const crates = d5p2[from - 1].splice(-number)
  d5p2[to - 1].push(...crates)
}

d5p1 = d5p1.map((stack) => stack.at(-1)).join('')
d5p2 = d5p2.map((stack) => stack.at(-1)).join('')
