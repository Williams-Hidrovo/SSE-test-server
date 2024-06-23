const SSEServer = require('sse-fake-server')
const { json } = require('stream/consumers')

let id = 1

const user1 = {
  id: id,
  name: 'williams',
  lastName: 'Hidrovo',
  age: 29
}

SSEServer(client => {
  // Every 2 seconds send data to client

  setInterval(() => {
    id++
    user1.id = id
    client.send(JSON.stringify(user1))
  }, 3000)
})
