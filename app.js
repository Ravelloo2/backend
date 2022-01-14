const express = require('express')
const res = require('express/lib/response')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({"STATUS":"SUCCESS"})
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})