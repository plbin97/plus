const express = require('express')
const plus = require('./plus')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({
  origin: '*'
}))

app.get('/', (req, res) => {
  const { val1, val2 } = req.query
  if (val1 && val2) {
    res.send(`${plus(Number(val1), Number(val2))}`)
  }
  res.send('lack of parameter')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})