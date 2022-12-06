import { simpleReadAsString } from '../inputs/helper.js'

const input = simpleReadAsString('inputs/2022/5.txt')

console.log(input)

const [cratesStr, instructionsStr] = input.split('\n\n')

const flipRowToStack = (arr) =>
  arr[0].map((_, i) => arr.map((row) => row[i]).reverse())

const rowsStr = cratesStr.split('\n').slice(0, -1)
const rowsArr = rowsStr.map((row) =>
  [...row.matchAll(/[A-Z]|    ?/g)].map((match) => match[0])
)

const stacks = flipRowToStack(rowsArr)

console.log(stacks)

export let d5p1 = 0
export let d5p2 = 0
