import { parseInputAsStrings } from './inputs/helper.js'

const input = parseInputAsStrings('2021/inputs/test.txt')

const dayTwoPartOne = () => {
  // ...

  input.map((value, index) => console.log(`value: ${value}, index: ${index}`))
}

export { dayTwoPartOne }
