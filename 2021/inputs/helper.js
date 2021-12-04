import fs from 'fs'

export const parseInputAsNumbers = (file) =>
  fs
    .readFileSync(file, 'utf-8')
    .trim()
    .split('\n')
    .map((item) => parseInt(item))
