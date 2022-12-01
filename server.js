import express from 'express'
import { day1 } from './2022/1.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎅')
  console.log({ 'day1.0': day1, 'day1.5': 'n/a' })
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
