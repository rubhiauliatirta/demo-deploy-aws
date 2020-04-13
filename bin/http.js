const http = require("http")
const app = require("../app")
const PORT = process.env.PORT || 3000
const express = require("express")

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

const server = http.createServer(app)
server.listen(PORT, function(){ console.log("server is running on port " + PORT) })