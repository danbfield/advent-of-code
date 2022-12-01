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

export const deepConvertStringToInt = (arr) =>
  arr.map((v) =>
    Array.isArray(v) ? deepConvertStringToInt(v) : Number(v) || 0
  )
