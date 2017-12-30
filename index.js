const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY, New Class')
})
app.listen(3000, '172.31.17.12' ,() => console.log('Server on port 3000'))
