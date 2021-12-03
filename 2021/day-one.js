import { parseInput } from './inputs/helper.js'

const dayOnePartOne = () => {
  const input = parseInput('2021/inputs/day-one.txt')

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentInput = input[i]
    const previousInput = input[i - 1]

    if (currentInput > previousInput) count++
  }

  const answer = count

  return answer
}

export { dayOnePartOne }
