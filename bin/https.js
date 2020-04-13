const fs = require("fs")
const https = require("https")
const app = require("../app")
const HTTPS_PORT = 433

https.createServer({
  key: fs.readFileSync('../key.pem'),
  cert: fs.readFileSync('../cert.pem'),
  ca: fs.readFileSync('../chain.pem')
}, app)


server.listen(HTTPS_PORT, function(){ console.log("server is running on port " + HTTPS_PORT) })