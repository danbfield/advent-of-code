import express from 'express'
import { dayOnePartOne } from './2021/index.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('Advent of Code')

  const dayOnePartOneValue = dayOnePartOne()

  console.log(`D1 P1: ${dayOnePartOneValue}`)
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
