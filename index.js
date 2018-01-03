const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

var db
	console.log('Connecting to database')
MongoClient.connect('mongodb://zlavallee:Lucy1810@ds237707.mlab.com:37707/zlav-db', (err, client) => {
	if (err) return console.log(err)
	db = client.db('zlav-db')
	app.listen(3300, '172.31.17.12' ,() => console.log('Server on port 3300'))
})

app.get('/', (req, res) => {
  res.sendFile('/home/zach/TestServer/public' + '/index.html')
	db.collection('quotes').find().toArray(function(err, results){
		console.log(results)
	})
})

app.post('/quotes', (req, res) => {
	console.log(req.body)
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)
		console.log('saved to database')
		res.redirect('/')
	})	
})
