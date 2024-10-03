const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! from CI/CD, new change request done bye me:D')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
