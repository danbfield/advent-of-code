import { simpleReadAsString } from '../inputs/helper.js'

const input = simpleReadAsString('inputs/2022/5.txt')

console.log(input)

const [cratesStr, instructionsStr] = input.split('\n\n')

const rowsStr = cratesStr.split('\n').slice(0, -1)
const rowsArr = rowsStr.map((row) =>
  [...row.matchAll(/[A-Z]|    ?/g)].map((match) => match[0])
)

console.log(rowsArr)

export let d5p1 = 0
export let d5p2 = 0
