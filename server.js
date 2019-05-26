// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors')
app.use(cors({optionSuccessStatus: 200}))  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// your first API endpoint... 
app.get('/api/timestamp/:date_string', (req, res) => {
  let date = new Date(req.params.date_string)
  if (date.unix === '') res.json({"error" : "Invalid date" }) 
  res.json({"unix": date.getTime(), "utc" : date.toUTCString() })
})

app.get('/api/timestamp', (req, res) => {
  res.send(new Date())
})

// listen for requests :)
const listener = app.listen(process.env.PORT)

