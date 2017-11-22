// Various of functions to support the rest
const fs = require('fs')
const rlp = require('readline-promise')

/* Always double digits */
const fix = a => `${('0' + a).slice(-2)}`

/* Returns string in format 'yyyy-mm-dd' n days ahead of today */
module.exports.formatFutureDate = (n=0) => {
	let cutoff = new Date()
	cutoff.setDate(cutoff.getDate() + n)
	return `'${cutoff.getFullYear()}-${fix(cutoff.getMonth() + 1)}-${fix(cutoff.getDate())}'`
}

/* Returns date string in format 'hh:mm:ss' */
module.exports.time = (date = new Date) => {
	return `${fix(date.getHours())}:${fix(date.getMinutes())}:${fix(date.getSeconds())}`
}

/* Returns string in format 'mm_dd_yyyy' from input date */
module.exports.formatDate = date => {
	return `${fix(date.getMonth())}_${fix(date.getDate())}_${date.getFullYear()}`
}

/* Reads the dump and returns promise of an array of json objects */
module.exports.getDataDump = data => {
	return new Promise((resolve, reject) => {
		let array = []
		const filePath = __dirname.split('/').slice(0, -2).join('/') + '/assets/tmdb_dump_11_22_2017.json'
		rlp.createInterface({ terminal: false, input: fs.createReadStream(filePath) })
		.each(line => { array.push(JSON.parse(line)) })
		.then(count => { resolve(this.filterArray(array)) })
		.caught(function(err) { reject(err) })
	})
}

/* Filter the list to reduce the size */
module.exports.filterArray = array => {
	console.log('length in array from dump', array.length)
	let res = array.filter(e => e.adult === false) // filter away porn
	//res = res.sort((a, b) => { return b.popularity - a.popularity}) // sort the list
	res = res.filter(e => e.popularity >= 1) // reduce array by popularity
	console.log('length out filtered array', res.length)
	return res
}
