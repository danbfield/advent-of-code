import fs from 'fs'

export const parseInputAsStrings = (file) =>
  fs.readFileSync(file, 'utf-8').trim().split('\n')

export const parseInputAsNumbers = (file) =>
  parseInputAsStrings(file).map((item) => parseInt(item))
