'use strict'

const redis = require('redis')
const publisher = redis.createClient({host: 'redis-pubsub'})
const projects = ['123', '456']

const getRandomInRange = (from, to, fixed) => (Math.random() * (to - from) + from).toFixed(fixed) * 1

setInterval(() => {
  let o = {
    projectId: projects[getRandomInRange(0, 1, 0)],
    geo: [getRandomInRange(-180, 180, 3), getRandomInRange(-90, 90, 3)],
    mac: getRandomInRange(0, 10)
  }

  let msg = new Buffer(JSON.stringify(o)).toString('base64')
  console.log(msg)
  publisher.publish('my-first-channel', msg)
}, 2000)

publisher.on('error', (err) => {
  console.error('Error connecting to redis', err)
})
