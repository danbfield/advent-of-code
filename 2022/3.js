import { parseInputAsStrings } from '../inputs/helper.js'

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

input.forEach((rucksack) => {
  console.log(rucksack)

  const compartmentOne = rucksack.substring(0, rucksack.length / 2)
  const compartmentTwo = rucksack.substring(
    rucksack.length / 2,
    rucksack.length
  )

  const sharedItem = commonItem(compartmentOne, compartmentTwo)

  console.log(sharedItem)
})

export const d3p1 = 'n/a'
