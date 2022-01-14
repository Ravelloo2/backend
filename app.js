const credentials = {secretUser:"user" , secretPassword:"password"}

const cors = require('cors')

const express = require('express')
const res = require('express/lib/response')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    const encodedAuth = (req.headers.authorization ||'')
        .split(' ')[1] || ''

    const [user, password] = Buffer.from(encodedAuth, 'base64')
        .toString().split(':')
        if(user === credentials.secretUser && password === credentials.secretPassword) {
            res.status(200).send({"STATUS":"SUCCESS"})
        } else {
            res.set('WWW-Authenicate', 'Basic realm="Access to Index"')
            res.status(401).send('Unauthorized Access')
        }
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});