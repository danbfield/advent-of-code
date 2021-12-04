import express from 'express'
import { dayOnePartOne, dayOnePartTwo } from './2021/index.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎄')

  console.log(`D1 P1: ${dayOnePartOne}`)
  console.log(`D1 P2: ${dayOnePartTwo}`)
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
