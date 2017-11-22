/**
 * Always double digits, for clock numbers in form hh, mm or ss.
 * @param {String} 
 * @returns {String}
 */
const fix = a => `${('0' + a).slice(-2)}`

/**
 * Formats string to 'yyyy-mm-dd' n days ahead of today
 * @param {Date} date
 * @returns {String} formatted
 */
module.exports.formatFutureDate = (date = new Date(), n = 0) => {
	cut = new Date(date)
	cut.setDate(cut.getDate() + n)
	return `'${cut.getFullYear()}-${fix(cut.getMonth() + 1)}-${fix(cut.getDate())}'`
}

/**
 * Formats date string to 'hh:mm:ss'
 * @param {Date} date
 * @returns {String} formatted
 */
module.exports.time = (date = new Date()) => {
	date = new Date(date)
	return `${fix(date.getHours())}:${fix(date.getMinutes())}:${fix(date.getSeconds())}`
}

/**
 * Formats string to 'mm_dd_yyyy' from input date
 * @param {Date} date
 * @returns {String} formatted
 */
module.exports.formatDate = (date = new Date()) => {
	date = new Date(date)
	return `${fix(date.getMonth())}_${fix(date.getDate())}_${date.getFullYear()}`
}
