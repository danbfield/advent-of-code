import fs from 'fs'

export const parseInput = (file) =>
  fs
    .readFileSync(file, 'utf-8')
    .trim()
    .split('\n')
    .map((item) => parseInt(item))
