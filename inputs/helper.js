import fs from 'fs'

export const parseInputAsStrings = (file) =>
  fs
    .readFileSync(file, 'utf-8')
    .trim()
    .split('\n')
    .map((item) => item.replace(/[\n\r]+/g, ''))

export const parseInputByCarriageReturn = (file) =>
  fs.readFileSync(file, 'utf-8').split('\r')

export const parseInputAsNumbers = (file) =>
  parseInputAsStrings(file).map((item) => parseInt(item))

/**
 * Splits an array into smaller arrays by seperator.
 *
 * Input: [ 'Bob', 'Dylan', 'Jack', '', 'Chris', 'Chloe', 'Jess' ]
 * Ouput: [ [ 'Bob', 'Dylan', 'Jack' ], [ 'Chris', 'Chloe', 'Jess' ] ]
 */
export const splitOnSeparator = (arr, separator = '') => {
  const array = [[]]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === separator) {
      array.push([])
    } else {
      array[array.length - 1].push(arr[i])
    }
  }

  return array
}

/**
 * Converts an array (and its nested arrays) from String to Int.
 *
 * Input: [ ['1', '2'], ['1'] ]
 * Output: [ [ 1, 2 ], [ 1 ] ]
 */
export const deepConvertStringToInt = (arr) =>
  arr.map((value) =>
    Array.isArray(value) ? deepConvertStringToInt(value) : Number(value) || 0
  )
