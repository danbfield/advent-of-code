import express from 'express'

const app = express()
const port = 8080

app.listen(port, () => {
  console.log('app started')
})

app.get('/', (req, res) => {
  res.send('Welcome to 8080...')
})
