import { parseInputAsStrings } from '../inputs/helper.js'

const values = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
]
const input = parseInputAsStrings('inputs/2022/3.txt')

const commonItem = (a, b) => {
  let duplicateCharacter = ''

  for (let i = 0; i < a.length; i++) {
    if (duplicateCharacter.indexOf(a[i]) === -1) {
      if (b.indexOf(a[i]) !== -1) {
        duplicateCharacter += a[i]
      }
    }
  }

  return duplicateCharacter
}

const value = []

input.forEach((rucksack) => {
  console.log(rucksack)

  const compartmentOne = rucksack.substring(0, rucksack.length / 2)
  const compartmentTwo = rucksack.substring(
    rucksack.length / 2,
    rucksack.length
  )

  value.push(
    values.findIndex(
      (item) => item === commonItem(compartmentOne, compartmentTwo)
    ) + 1
  )
})

console.log(value)

export const d3p1 = 'n/a'
