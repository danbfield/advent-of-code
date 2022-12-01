import express from 'express'
import { dayOne } from './2022/1.js'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('🎄 Advent of Code 🎅')
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
