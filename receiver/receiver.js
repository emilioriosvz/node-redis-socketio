'use strict'

const redis = require('redis')
const subscriber = redis.createClient({host: 'redis-pubsub'})
subscriber.subscribe('my-first-channel')

const io = require('socket.io')()
io.listen(3000)
io.on('connection', (conn) => {})

// Add a connect listener
io.sockets.on('connection', (socket) => {
  console.log('Client connected.')

  // Disconnect listener
  socket.on('disconnect', () => {
    console.log('Client disconnected.')
    console.log(socket.conn.id)
  })
})

subscriber.on('message', (channel, message) => {
  let buffer = new Buffer(message, 'base64').toString('utf8')
  let msg = JSON.parse(buffer)
  let event = `project-${msg.projectId}`
  console.log(msg)
  io.emit(event, msg)
})

subscriber.on('error', (err) => {
  // handle the error here
  let msg = {error: `Error connecting to redis: ${err}`}
  console.err(msg)
})
