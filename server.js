import express from 'express'
import { d1p1, d1p2 } from './2022/1.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎅')
  console.log({ 'day1.0': d1p1, 'day1.5': d1p2 })
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
