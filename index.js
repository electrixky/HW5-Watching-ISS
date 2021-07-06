'use strict'
async function getLocation() {
	try {
		let response = await fetch('http://api.open-notify.org/iss-now.json?callback=?', {
		method: "GET",
		headers: {
			"Content-type": "aplication/json"
		}
	})

	const data = await response.json()
	console.log(data)

	document.querySelector('.location__inner').innerHTML = `<strong>ISS is now located at:</strong>\n<em>longitude: </em>${data.iss_position.longitude}, <em>latitude: </em>${data.iss_position.latitude}` 

	} catch(ex) {
		console.log(ex)
	}
	
}

getLocation()


function dateTime() {
	const currentDate = new Date();
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	let dayName = days[currentDate.getDay()]
	let monthName = months[currentDate.getMonth()]
	let minutes = (currentDate.getMinutes() < 10? '0' : '') + currentDate.getMinutes()
	document.querySelector('.datetime__time').innerHTML = `<strong>Current UTC time: ${currentDate.getUTCHours()}:${minutes}</strong>`
	document.querySelector('.datetime__date').innerHTML = `<em>${dayName}, ${currentDate.getDay()} ${monthName} ${currentDate.getFullYear()}</em>`
	setTimeout(dateTime, 5000)
}

dateTime()

async function getPeople() {
	try {
		let response = await fetch('http://api.open-notify.org/astros.json', {
		method: "GET",
		headers: {
			"Content-type": "aplication/json"
		}
	})
	} catch(ex) {
		console.log(ex)
	}

	const data = await response.json()
	console.log(data)
	
}
