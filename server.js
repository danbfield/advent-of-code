import express from 'express'
import {
  dayOnePartOne,
  dayOnePartTwo,
  dayTwoPartOne,
  dayTwoPartTwo,
  dayThreePartOne,
  dayThreePartTwo,
  dayFourPartOne,
  dayFourPartTwo,
  dayFivePartOne,
  dayFivePartTwo,
} from './2021/index.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎅')

  console.log(`D1 P1: ${dayOnePartOne}`)
  console.log(`D1 P2: ${dayOnePartTwo}`)
  console.log(`D2 P1: ${dayTwoPartOne}`)
  console.log(`D2 P2: ${dayTwoPartTwo}`)
  console.log(`D3 P1: ${dayThreePartOne}`)
  console.log(`D3 P2: ${dayThreePartTwo}`)
  console.log(`D4 P1: ${dayFourPartOne}`)
  console.log(`D4 P2: ${dayFourPartTwo}`)
  console.log(`D5 P1: ${dayFivePartOne}`)
  console.log(`D5 P2: ${dayFivePartTwo}`)
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
