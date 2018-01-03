const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world 2E')
})

app.listen(3300, '172.31.17.12' ,() => console.log('Server on port 3000'))
