require("dotenv").config()

const express = require("express")
const cors = require("cors")
const server = express()

const port = process.env.PORT || 9000;

server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
  res.send(`<h1> Your on the default line!</h1>`)
})

server.get("/api/users", (req, res) => {
  res.status(200).json({
    message: "this would be a series of users"
  })
})

server.post("/api/register", (req, res) => {
  res.status(201).json({
    message: "this would be the succesfully created users data"
  })
})

server.post("api/login", (req,res) => {
  res.status(202).json({
    message: "gives a welcome message, after verifying that req.username and req.password are good"
  })
})

server.listen(port, () => {
  console.log(`Your tuning into port ${port}, hottest port on the west side!`)
})