import express from 'express'
import { answer1 } from './2024/day-one.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎅')
  console.log({ 'day1.0': answer1 })
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
