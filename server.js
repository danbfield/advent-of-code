import express from 'express'
import { d1p1, d1p2 } from './2022/1.js'
import { d2p1, d2p2 } from './2022/2.js'
import { d3p1, d3p2 } from './2022/3.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎅')
  console.log({ 'day1.0': d1p1, 'day1.5': d1p2 })
  console.log({ 'day2.0': d2p1, 'day2.5': d2p2 })
  console.log({ 'day3.0': d3p1, 'day3.5': d3p2 })
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
