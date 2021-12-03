const http = require('http')

// handle sending requests and returning responses
const handleRequests = (request, response) => {
  // return string
  response.end('Hello world!')
}

// create the server
const server = http.createServer(handleRequests)

// start server and listen on port x
server.listen(8080, function () {
  console.log('Listening on port 8080')
})
