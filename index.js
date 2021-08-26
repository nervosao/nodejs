console.log(` porta ${process.env.PORT}`)

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! - 20 -')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
