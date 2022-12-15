import express from 'express'
import { d1p1, d1p2 } from './2022/1.js'
import { d2p1, d2p2 } from './2022/2.js'
import { d3p1, d3p2 } from './2022/3.js'
import { d4p1, d4p2 } from './2022/4.js'
import { d5p1, d5p2 } from './2022/5.js'
import { d6p1, d6p2 } from './2022/6.js'
import { d7p1, d7p2 } from './2022/7.js'
import { d8p1, d8p2 } from './2022/8.js'
import { d9p1, d9p2 } from './2022/9.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎅')
  console.log({ 'day1.0': d1p1, 'day1.5': d1p2 })
  console.log({ 'day2.0': d2p1, 'day2.5': d2p2 })
  console.log({ 'day3.0': d3p1, 'day3.5': d3p2 })
  console.log({ 'day4.0': d4p1, 'day4.5': d4p2 })
  console.log({ 'day5.0': d5p1, 'day5.5': d5p2 })
  console.log({ 'day6.0': d6p1, 'day6.5': d6p2 })
  console.log({ 'day7.0': d7p1, 'day7.5': d7p2 })
  console.log({ 'day8.0': d8p1, 'day8.5': d8p2 })
  console.log({ 'day9.0': d9p1, 'day9.5': d9p2 })
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
