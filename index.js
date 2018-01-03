const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile('/home/zach/TestServer/public' + '/index.html')
})
app.post('/quotes', (req, res) => {
  console.log(req.body)
  res.sendFile('/home/zach/TestServer/public' + '/index.html')
})
app.listen(3300, '172.31.17.12' ,() => console.log('Server on port 3000'))
