import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/3.txt')

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
const upperCase = lowerCase.map((letter) => letter.toUpperCase())
const values = [...lowerCase, ...upperCase]

const commonItemsForGroup = (group) => {
  const items = []

  for (let i = 1; i < group.length; i++) {
    group[0].split('').forEach((letter) => {
      if (group[i].includes(letter)) {
        items.push(letter)
      }
    })
  }

  return items[0]
}

const items = []

input.forEach((rucksack) => {
  const compartmentOne = rucksack.substring(0, rucksack.length / 2)
  const compartmentTwo = rucksack.substring(
    rucksack.length / 2,
    rucksack.length
  )

  const uniqueItem = commonItemsForGroup([compartmentOne, compartmentTwo])
  const item = values.findIndex((item) => item === uniqueItem) + 1
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
