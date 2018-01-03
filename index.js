const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

var db
MongoClient.connect('mongodb://zlavallee:Lucy1810@ds237707.mlab.com:37707/zlav-db', (err, database) => {
	if (err) return console.log(err)
	db = database
	app.listen(3300, '172.31.17.12' ,() => console.log('Server on port 3300'))
})

app.get('/', (req, res) => {
  res.sendFile('/home/zach/TestServer/public' + '/index.html')
})
app.post('/quotes', (req, res) => {
  console.log(req.body)
  res.sendFile('/home/zach/TestServer/public' + '/index.html')
})
