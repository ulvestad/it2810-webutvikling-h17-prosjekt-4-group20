// supertest request for get and post calls
const get = (agent, url, header, callback) => agent.get(url).set({ ...header, Accept: 'application/json' }).end(callback)
const post = (agent, url, token, data, callback) => agent.post(url).set({ ...token, Accept: 'application/json' }).send(data).end(callback)

/* To promise */
module.exports.sendGet = (agent, url, header) => {
  return new Promise((resolve, reject) => {
    get(agent, url, header, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

module.exports.sendPost = (agent, url, token, data) => {
  return new Promise((resolve, reject) => {
    post(agent, url, token, data, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}