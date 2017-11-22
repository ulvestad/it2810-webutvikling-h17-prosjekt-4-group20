// Util functions

/* Always double digits */
const fix = a => `${('0' + a).slice(-2)}`

/* Returns string in format 'yyyy-mm-dd' n days ahead of today */
module.exports.formatFutureDate = (date = new Date(), n = 0) => {
	cut = new Date(date)
	cut.setDate(cut.getDate() + n)
	return `'${cut.getFullYear()}-${fix(cut.getMonth() + 1)}-${fix(cut.getDate())}'`
}

/* Returns date string in format 'hh:mm:ss' */
module.exports.time = (date = new Date()) => {
	date = new Date(date)
	return `${fix(date.getHours())}:${fix(date.getMinutes())}:${fix(date.getSeconds())}`
}

/* Returns string in format 'mm_dd_yyyy' from input date */
module.exports.formatDate = (date = new Date()) => {
	date = new Date(date)
	return `${fix(date.getMonth())}_${fix(date.getDate())}_${date.getFullYear()}`
}
