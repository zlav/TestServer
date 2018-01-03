var update = document.getElementById('update')
update.addEventListener('click', function(){
	console.log('Update Clicked')
	fetch('quotes', {
	  method: 'put',
	  headers: {'Content-Type': 'application/json'},
	  body: JSON.stringify({
		 'name': 'Tess',
		 'quote': 'Replace'
	  })
	}).then(res => {
		if(res.ok) return res.json()
	}).then(data => {
		console.log(data)
		window.location.reload(true)
	})
})

var del = document.getElementById('deleteT')

del.addEventListener('click', function () {
	fetch('quotes', {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'name': 'Tess'
		})
	}).then(res => {
		if(res.ok) return res.json()
	}).then(data => {
		console.log(data)
		window.location.reload(true)
	})
})


var delZ = document.getElementById('deleteZ')

delZ.addEventListener('click', function () {
	fetch('quotes', {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'name': 'Zach'
		})
	}).then(res => {
		if(res.ok) return res.json()
	}).then(data => {
		console.log(data)
		window.location.reload(true)
	})
})
