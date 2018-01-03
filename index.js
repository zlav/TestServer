const express = require('express')
const app = express()

//app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, '172.31.17.12' ,() => console.log('Server on port 3000'))
