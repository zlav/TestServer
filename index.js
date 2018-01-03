const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
var db
MongoClient.connect('mongodb://zlavallee:Lucy1810@ds237707.mlab.com:37707/zlav-db', (err, client) => {
	if (err) return console.log(err)
	db = client.db('zlav-db')
	app.listen(3300, '172.31.17.12' ,() => console.log('Server on port 3300 new ' + Date()))
})

app.set('view-engine', 'ejs')
app.get('/', (req, res) => {
	db.collection('quotes').find().toArray(function(err, result){
		res.render('index.ejs', {quotes: result})
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

app.put('/quotes', (req, res) => {
	db.collection('quotes').findOneAndUpdate({name: 'Zach'}, {
		$set: {
			name: req.body.name,
			quote: req.body.quote
		}
	}, {
		sort: {_id: -1},
		upsert: true
	}, (err, result) => {
		if(err) return res.send(err)
		res.send(result)
	})
})

app.delete('/quotes', (req,res) => {
	db.collection('quotes').findOneAndDelete({name: req.body.name},
	(err, result) => {
		if(err) return res.send(500, err)
		res.send({message: 'deleted a quote by '+ req.body.name})
		console.log('deleted a quote by '+ req.body.name)
	})

})
