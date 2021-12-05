import express from 'express'
import {
  dayOnePartOne,
  dayOnePartTwo,
  dayTwoPartOne,
  dayTwoPartTwo,
  dayThreePartOne,
  dayThreePartTwo,
} from './2021/index.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎄')

  console.log(`D1 P1: ${dayOnePartOne}`)
  console.log(`D1 P2: ${dayOnePartTwo}`)
  console.log(`D2 P1: ${dayTwoPartOne}`)
  console.log(`D2 P2: ${dayTwoPartTwo}`)
  console.log(`D3 P1: ${dayThreePartOne}`)
  console.log(`D3 P2: ${dayThreePartTwo}`)
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
