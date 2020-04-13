const fs = require("fs")
const https = require("https")
const app = require("../app")
const HTTPS_PORT = 433

https.createServer({
  key: fs.readFileSync(process.env.PRIVATE_KEY),
  cert: fs.readFileSync(process.env.CERTIFICATE),
  ca: fs.readFileSync(process.env.CHAIN)
}, app)


server.listen(HTTPS_PORT, function(){ console.log("server is running on port " + HTTPS_PORT) })