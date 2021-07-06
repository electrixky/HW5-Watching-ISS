'use strict'

// async function myFunc() {
// 	try {
// 		let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits", {
// 		method: "GET",
// 		headers: {
// 			"Content-type": "aplication/json"
// 		}
// 	})
// 	const parsed = await response.json()
// 	console.log(parsed[0].author)
// 	} catch(ex) {
// 		console.log(ex)
// 	}
// }

// myFunc()

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
	let monthName = months[currentDate.getMonth()+1]
	document.querySelector('.datetime__time').innerHTML = `<strong>Current UTC time: ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}</strong>`
	document.querySelector('.datetime__date').innerHTML = `<em>${dayName}, ${currentDate.getDay()} ${monthName} ${currentDate.getFullYear()}</em>`
	setTimeout(dateTime, 5000); 
}

dateTime()