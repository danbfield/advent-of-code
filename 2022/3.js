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

const findSharedCompartmentItem = (rucksack) => {
  const compartmentOne = rucksack.substring(0, rucksack.length / 2)
  const compartmentTwo = rucksack.substring(
    rucksack.length / 2,
    rucksack.length
  )

  return commonItems(compartmentOne, compartmentTwo)
}

const items = []

input.forEach((rucksack) => {
  const item =
    values.findIndex((item) => item === findSharedCompartmentItem(rucksack)) + 1

  items.push(item)
})

const findSharedGroupItem = (group) => {
  const items = []

  group[0].split('').forEach((letter) => {
    if (group[1].includes(letter) && group[2].includes(letter)) {
      items.push(letter)
    }
  })

  return items[0]
}

const badges = []

for (let i = 0; i < input.length; i += 3) {
  const uniqueItem = findSharedGroupItem([input[i], input[i + 1], input[i + 2]])

  const item = values.findIndex((item) => item === uniqueItem) + 1

  badges.push(item)
}

export const d3p1 = items.reduce((partialSum, a) => partialSum + a, 0)
export const d3p2 = badges.reduce((partialSum, a) => partialSum + a, 0)
