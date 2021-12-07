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
