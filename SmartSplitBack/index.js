const express = require("express")
const app = express()

require("dotenv").config()
const {PORT} = process.env

//listens to requests on given port
app.listen(PORT, () => {
    console.log(`Server is litening on port ${PORT}`)
})