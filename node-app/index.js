const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
console.log('In / route')
return res.json({ message: "Ok" })
})

app.get("/health-check", (req, res) => {
console.log('In /health-check route')
return res.json({ message: "I am ok" })
})

const server = app.listen(5000, () => {
console.log("Node server started at 5000")
})

app.use(function (req, res, next) {
return res.status(404).json({ error: "No route found" })
})
  