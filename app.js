const cors = require('cors')

const express = require('express')
const res = require('express/lib/response')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.set('WWW-Authenicate', 'Basic realm="Access to Index"')
    res.status(401).send('Unauthorized Access')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});