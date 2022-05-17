const express = require('express')
const cors = require('cors')

/** Import env variables */
require('dotenv').config({ 
    path: process.env.NODE_ENV === "test" ? `.env.test` : undefined 
})

const app = express()
const port = process.env.PORT || 5000

/** Setup app */
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.get("/", (req, res) => {
    res.send(`Hello app, running on: ${process.env.NODE_ENV}`)
})

if (process.env.NODE_ENV !== "test")
    app.listen(port, () =>
        console.log(`Example app listening at http://localhost:${port}`)
    )

module.exports = app