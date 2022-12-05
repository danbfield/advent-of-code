import { parseInputAsStrings } from '../inputs/helper.js'

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
const upperCase = lowerCase.map((letter) => letter.toUpperCase())
const values = [...lowerCase, ...upperCase]

const input = parseInputAsStrings('inputs/2022/3.txt')

const commonItems = (a, b) => {
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

const findItem = (rucksack) => {
  const compartmentOne = rucksack.substring(0, rucksack.length / 2)
  const compartmentTwo = rucksack.substring(
    rucksack.length / 2,
    rucksack.length
  )

  const commonItem = commonItems(compartmentOne, compartmentTwo)
  const item = values.findIndex((item) => item === commonItem) + 1

  return item
}

const items = []

input.forEach((rucksack) => {
  const item = findItem(rucksack)
  items.push(item)
})

for (let i = 0; i < input.length; i += 3) {
  const group = [input[i], input[i + 1], input[i + 2]]
  console.log(group)
}
export const d3p1 = items.reduce((partialSum, a) => partialSum + a, 0)
