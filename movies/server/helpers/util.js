// Various of functions to support the rest
const fs = require('fs')


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
