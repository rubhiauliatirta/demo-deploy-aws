const express = require("express")
const app = express()
const cors = require("cors")
const data = require("./potter.js")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.get("/students", (req, res) => {
  res.json(data)
})

module.exports = app