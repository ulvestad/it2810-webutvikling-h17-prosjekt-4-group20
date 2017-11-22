/**
 * Util.js
 * Methods to help in integration testing the API
 * @param {Agent} supertest
 * @param {String} url
 * @param {Object} header
 * @param {Function} callback
 * @returns {Promise.<User>} user
 */

/* Request GET as callback */
const get = (agent, url, header, callback) => agent.get(url).set({ ...header, Accept: 'application/json' }).end(callback)

/* Request POST as callback */
const post = (agent, url, token, data, callback) => agent.post(url).set({ ...token, Accept: 'application/json' }).send(data).end(callback)

/* Request GET as promise */
module.exports.sendGet = (agent, url, header) => {
  return new Promise((resolve, reject) => {
    get(agent, url, header, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

/* Request GET as promise */
module.exports.sendPost = (agent, url, token, data) => {
  return new Promise((resolve, reject) => {
    post(agent, url, token, data, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}