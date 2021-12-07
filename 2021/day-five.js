import { parseInputAsStrings } from './inputs/helper.js'

const input = parseInputAsStrings('2021/inputs/test.txt')

const dayFivePartOne = null

const dayFivePartTwo = null

/**
 * Builds an array of inputs into a more usable format. Each coordinate
 * is an array of arrays, for the before and after.
 *
 * [
 *   [ [ '0,9' ], [ '5,9' ] ],
 *   [ [ '8,0' ], [ '0,8' ] ]
 * ]
 *
 * @param string[] input
 * @returns array
 */
const formatCoordinates = (input) =>
  input.map((line) => line.split('->').map((coordinate) => [coordinate.trim()]))

const convertCoordinatesIntoDiagram = (coordinates) => {
  console.log(coordinates)
  const diagram = []

  return diagram
}

const coordinates = formatCoordinates(input)
const diagram = convertCoordinatesIntoDiagram(coordinates)

export { dayFivePartOne, dayFivePartTwo }
