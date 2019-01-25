const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
.then((db) => {app.set('db', db)
}).catch(err => console.log (err))




const SERVERPORT = process.env.SERVERPORT
app.listen(SERVERPORT, () => console.log(`Server is listening on ` + SERVERPORT))